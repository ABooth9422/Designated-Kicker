// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
//
module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/startSearch");
  });
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/startSearch");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  app.post("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};
