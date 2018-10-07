require("dotenv");
var db = require("../models");

var path = require("path");

const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  let transporter = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
      user: process.env.Gmail_Email,
      pass: process.env.Gmail_Password
    }
  })
  );

  app.post("/", function (req, res) {

    let mailOptions = {
      from: req.body.email,
      to: process.env.Gmail_Email,
      subject: "Portfolio: " + req.body.subject,
      text: req.body.textInput,
      replyTo: req.body.email
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      } 
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
console.log("am i posting?")
      db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        question: req.body.textInput
      }).then(function () {
        console.log("is this happening?")
        res.redirect("/");
      });
    });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

};