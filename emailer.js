// This is not secure and out of date. Gmail refused this connection.
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mdfox760@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'mdfox760@gmail.com',
  to: 'kaifoxh@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});