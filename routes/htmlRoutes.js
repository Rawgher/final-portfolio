var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      title: "Home",
      msg: "Welcome to my website!"
    });
  });

  // Load example page and pass in an example by id
  app.get("/AboutMe", function (req, res) {
      res.render("about", {
        title: "About Me",
        msg: "About Me"
      });
    });

  // Load example page and pass in an example by id
  app.get("/Portfolio", function (req, res) {
      res.render("example", {
        title: "Portfolio",
        msg: "My Portfolio"
      });
    });

  // Load example page and pass in an example by id
  app.get("/Contact", function (req, res) {
      res.render("example", {
        title: "Contact Me",
        msg: "Contact Me",
      });
    });
  
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
