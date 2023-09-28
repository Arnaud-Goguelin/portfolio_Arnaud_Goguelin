const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const verifiedToken = JWT.verify(token, process.env.JWTKEY);
		const userId = verifiedToken.userId;
		req.auth = { userId };
		next();
	}
	catch (error) {
		res.status(403).json({ error });
	}
};