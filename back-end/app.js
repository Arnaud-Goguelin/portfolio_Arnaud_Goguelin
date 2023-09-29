const express = require('express');
const app = express();

const cors = require('cors')
const helmet = require('helmet');
const ERL = require('./middlewares/expressRateLimitMiddleware');
const PES = require('./middlewares/perfectExpressSanitizerMiddleware');
const multer = require('./middlewares/multerMidleware');
const checkEntries = require('./middlewares/checkEntriesMiddleware')
const messageController = require('./controllers/messageController');

app.use(cors())
app.use(helmet({
	crossOriginResourcePolicy: false,
}));
app.use(ERL.limiter);

app.use(express.json());

app.post('/api/Contact', PES.sanitizer, multer, checkEntries.validateEmail, messageController.postMessage);

module.exports = app;
