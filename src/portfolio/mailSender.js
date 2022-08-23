var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rootrskmailer@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
});


const sendMail = async ({ email,name, subject,message}) => {
    var mailOptions = {
        from: 'rootrskmailer@gmail.com',
        to: process.env.EMAIL,
        subject: subject,
        text: `Message from Portfolio WebSite`,
        html: `<div>
                    <h3>Name: ${name}</h3>
                    <h3>Email: ${email}</h3>
                    <h3>Subject: ${subject}</h3>
                    <h3>Source: Protfolio WebLink</h3>
                    <h3>Message: </h3>
                    <p>${message}</p>
                </div>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail