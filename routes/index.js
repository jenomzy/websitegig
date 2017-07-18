var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/sendmessage', function (req, res) {
   var name = req.body.Name;
   var email = req.body.Email;
   var subject = req.body.Subject;
   var message = req.body.Message;

    var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'Outlook365',
        auth: {
            user: '!!! YOUR SENDGRID USERNAME !!!',
            pass: '!!! YOUR SENDGRID PASSWORD !!!'
        }
    });
    var mailOptions = {
        to: 'gigtech24@gmail.com',
        from: name <email> 'from website',
        subject: subject,
        text: message
    };
    smtpTransport.sendMail(mailOptions, function(err) {
        console.log('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
    });
});

module.exports = router;