require('dotenv').config();
const readline = require("readline");
const nodemailer = require('nodemailer');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your email? ", function(email) {
    rl.question("Where do you live ? ", function(country) {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          }
        });
        var mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: 'Sending Email using Node.js',
          text: `That was easy 2! ${country}`
        };
      console.log(`hello ${email}`)
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            rl.close();
          }
        });
      });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


