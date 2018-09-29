var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      title: "Home",
      msg: "Welcome to my website!"
    });
  });

  // Load the about me page
  app.get("/AboutMe", function (req, res) {
      res.render("about", {
        title: "About Me",
        msg: "About Me"
      });
    });

  // Load the portfolio page
  app.get("/Portfolio", function (req, res) {
      res.render("portfolio", {
        title: "Portfolio",
        msg: "My Portfolio"
      });
    });

  // Load the contact page
  app.get("/Contact", function (req, res) {
      res.render("contact", {
        title: "Contact Me",
        msg: "Contact Me"
      });
    });
  
  // Post contact requests to the database
  app.post("/Contact", function (req, res) {
    db.Contact.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      question: req.body.textInput
    }).then(function () {
      res.redirect("/Contact")
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
