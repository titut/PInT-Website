const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: "choangbill.le@gmail.com",
        clientId: "FILL_HERE",
        clientSecret: "FILL_HERE",
    },
});
  
const options = {
    from: "choangbill@gmail.com",
    to: "cle@olin.edu",
    subject: "TEST EMAIL",
    text: "PLEASE WORK BRO!"
}

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent: " + info.response);
})
