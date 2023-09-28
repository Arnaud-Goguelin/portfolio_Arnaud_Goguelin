const multer = require('multer');

const upload = multer()

//ici multer n'acceptera que les textes
module.exports = upload.none();
