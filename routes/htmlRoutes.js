/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  var main = ["/", "/main"];
  main.forEach(function(path) {
    app.get(path, function(req, res) {
      db.kickstarterseed.findAll({}).then(function(dbExamples) {
        res.render("index", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });
  });
  app.get("/contactUs", function(req, res) {
    res.render("contactUs");
  });
  app.get("/aboutUs", function(req, res) {
    res.render("aboutUs");
  });
  app.get("/startSearch", function(req, res) {
    res.render("search");
  });
  app.get("/itemAdd", function(req, res) {
    var storage = localStorage.getItem("categoryInput");
    console.log(storage);
    db.kickstarterseed
      .findAll({
        where: {
          category: storage
        },
        limit: 15
      })
      .then(function(data) {
        var hndlebarObj = {
          test: data
        };
        res.render("itemAdd", hndlebarObj);
      });
  });
  app.get("/recent", function(req, res) {
    db.Userprojects.findAll({ limit: 15 }).then(function(data) {
      var hndlebarObj = {
        test: data
      };
      res.render("recent", hndlebarObj);
    });
  });
  app.get("*", function(req, res) {
    res.render("404");
  });
};
