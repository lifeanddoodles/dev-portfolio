var nodemailer = require('nodemailer');
const creds = require('../config/config');
const { check, sanitize, validationResult } = require('express-validator');

module.exports = app => {
  app.post('/send', async (req, res, next) => {
    await check('name', 'Name cannot be blank')
      .not()
      .isEmpty()
      .withMessage('Name cannot be blank')
      .run(req);
    await check('email', 'Email is not valid')
      .isEmail()
      .run(req);
    await check('message', 'Message cannot be empty.')
      .not()
      .isEmpty()
      .run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    const outputPlainText = `
    You have a new contact request
    Contact Details:
    - Name: ${req.body.name}
    - Email: ${req.body.email}

    Message:
    ${req.body.message}
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: creds.USER,
        pass: creds.PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Dev Portfolio" <sandra@lifeanddoodles.com>', // sender address
      to: 'nelda.bernhard@ethereal.email', // list of receivers
      subject: 'Contact Request', // Subject line
      text: outputPlainText, // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.sendStatus(401);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.sendStatus(200);
    });
  });
};
