/* eslint-disable no-unused-vars */
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/isAuth");

//
module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log("post route to login");
    res.json("/startSearch");
  });

  app.post("/api/signup", function(req, res) {
    var handleObj = {
      name: req.body.name
    };
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(data) {
        console.log("heres data" + data);
        res.json("/startSearch");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  app.post("/logout", function(req, res) {
    req.logout();
  });
};
