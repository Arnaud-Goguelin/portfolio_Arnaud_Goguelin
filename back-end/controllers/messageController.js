// const nodemailer = require('nodemailer');
const Mailjet  = require('node-mailjet')
require('dotenv').config();
  

exports.postMessage = async (req, res) => {
	try {

		const mailjet = Mailjet.apiConnect(
			process.env.MJ_APIKEY_PUBLIC,
			process.env.MJ_APIKEY_PRIVATE,
		);

		const messageToSend = `
			Nom: ${req.body.firstname}  ${req.body.lastname},
			Email: ${req.body.email},
			Message:${req.body.message}
		`

		const request = mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
			  {
				From: {
				  Email: 'goguelin.portfolio@gmail.com',
				  Name: 'portfolio',
				},
				To: [
				  {
					Email: 'arnaud.goguelin@gmail.com',
					Name: 'Arnaud',
				  },
				],
				Subject: 'Nouveau message depuis le portfolio',
				TextPart: messageToSend,
			  },
			],
		  })
		  request
			.then(result => {
			  console.log(result.body)
			  return res.status(200).json({ message: 'E-mail envoyé avec succès' })
			})
			.catch(error => {
			  console.log(error.statusCode, error )
			  return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
			})

	} catch (error) {
		console.log(error)
		return res.status(400).json({message :`Erreur lors de l\'envoi de l\'e-mail: ${error}`});
	}
};

// .usingPlugin(validator.isEmail, 'L\'identifiant doit être un email');

