var db = require("../models");

var path = require("path");

module.exports = function (app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/", function (req, res) {
      db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        question: req.body.textInput
      }).then(function () {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
