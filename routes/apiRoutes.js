var db = require("../models");

module.exports = function(app) {
  // Created to add viewers question or comment to my database
  app.post("/api/contact", function(req, res) {
    db.Contact.create(req.body).then(function(dbContact) {
      res.json(dbContact);
    });
  });
};
