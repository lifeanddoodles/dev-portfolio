var nodemailer = require('nodemailer');
const creds = require('../config/config');
const { check, validationResult } = require('express-validator');

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

    const fetchConfig = () => {
      if (process.env.NODE_ENV === 'development') {
        return {
          auth: {
            user: creds.ETHEREAL_EMAIL,
            pass: creds.ETHEREAL_PASS
          },
          host: creds.ETHEREAL_EMAIL_SERVER,
          port: creds.ETHEREAL_EMAIL_PORT,
          secure: creds.ETHEREAL_EMAIL_SECURE,
          tls: {
            rejectUnauthorized: false
          }

          // auth: {
          //   user: creds.PROD_EMAIL,
          //   pass: creds.PROD_PASS
          // },
          // service: 'gmail'
          // host: creds.PROD_EMAIL_SERVER,
          // port: creds.PROD_EMAIL_PORT,
          // secure: creds.PROD_EMAIL_SECURE,
          // tls: {
          //   rejectUnauthorized: false
          // }
        };
      }

      return {
        auth: {
          user: creds.PROD_EMAIL,
          pass: creds.PROD_PASS
        },
        service: 'gmail'
      };
    };

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(fetchConfig());

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Portfolio" <sandra@lifeanddoodles.com>',
      to: '<sandravargasgro@gmail.com>',
      subject: 'Contact Request',
      text: outputPlainText,
      html: output
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.sendStatus(401);
      }
      console.log('Message sent: %s', info.messageId);
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.sendStatus(200);
    });
  });
};
