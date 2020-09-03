const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'lssindonesia.com',
    port: 465,
    auth: {
        user: 'hendraferaldi@lssindonesia.com',
        pass: 'Mah3ndra!'
    },
});

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'hendraferaldi@lssindonesia.com', // TODO: the receiver email has to be authorized for the free tier
        subject : subject,
        text : 'Nama : ' + name + '\n' + text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
