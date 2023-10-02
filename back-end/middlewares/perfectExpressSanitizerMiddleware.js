const perfectExpressSanitizer = require('perfect-express-sanitizer');

exports.sanitizer = perfectExpressSanitizer.clean({
	xss: true,
	noSql: true,
	sql: true,
	level: 5,
});