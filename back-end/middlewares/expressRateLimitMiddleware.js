const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 10,
	standardHeaders: 'draft-7', 
	legacyHeaders: false,
	statusCode: 429,
	message: '10 requêtes maximum par intervalle de 15 minutes. Patientez 15 minutes',
});

module.exports = { limiter };