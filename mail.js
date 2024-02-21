const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

var test_obj = {
    org: { name: 'A', what: 'B' },
    purpose: { why: 'C', how: 'D' },
    contact: { nameperson: 'E', email: 'F', phone: '' }
}

function send(obj){
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "choangbill.le@gmail.com",
            pass: "scoh ljee bjze xbbj",
        },
    });

    var subject = "Form response from " + obj.org.name
    var html_text = "<h1>Form Responses</h1><h3>Organization</h3><p>Name: " + obj.org.name + "</p><p>What they do: " + obj.org.what + "</p><h3>Purpose</h3><p>Why are you reaching out to us: " + obj.purpose.why + "</p><p>How can we help: " + obj.purpose.how + "</p><h3>Contact</h3><p>Name: " + obj.contact.nameperson + "</p><p>Email: " + obj.contact.email + "</p><p>Phone: " + obj.contact.phone + "</p>";
    
    const options = {
        from: "Bill Le <choangbill@gmail.com",
        to: "cle@olin.edu",
        subject: subject,
        text: "HTML did not respond.",
        html: html_text
    }
    
    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent: " + info.response);
    })
}

module.exports = { send }