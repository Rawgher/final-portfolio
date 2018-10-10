require("dotenv").config();
const db = require("../models");
const keys = require("../public/js/keys.js");
const path = require("path");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {

  // route for home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // set up for nodemailer
  let transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
      user: keys.gmail.Gmail_Email,
      pass: keys.gmail.Gmail_Password
    }
  }));

  // post route for home page
  app.post("/", function (req, res) {

    // setting up mail object
    let mailOptions = {
      from: req.body.email,
      to: keys.gmail.Gmail_Email,
      subject: "Portfolio: " + req.body.subject,
      text: req.body.textInput,
      replyTo: req.body.email
    };

    // function sending users input to my email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      } 
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
    
      // setting up sequelize to grab users input and enter it into a database
      db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        question: req.body.textInput
      }).then(function () {
        res.redirect("/thanks");
      });
    });


  app.get("/thanks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/thankYou.html"));
  });
  
  // setting up 404 page to catch any incorrect routes the user inputs
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

};