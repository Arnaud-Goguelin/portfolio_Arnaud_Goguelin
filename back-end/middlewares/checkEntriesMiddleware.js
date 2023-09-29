const validator = require('validator');

exports.validateEmail = (req, res, next) => {
	
	if (validator.isEmail(req.body.email) === true) { next }
	return res.status(500).json({ 
		message: 'Merci de renseigner une adresse email valide.' });
}
