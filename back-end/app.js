const express = require('express');

const helmet = require('helmet');
const ERL = require('./middlewares/expressRateLimitMiddleware');


const app = express();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(helmet({
	crossOriginResourcePolicy: false,
}));

// const cors = require('cors')
// app.use(cors())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

app.use(ERL.limiter);
app.use('/api/auth', authRoutes);

module.exports = app;