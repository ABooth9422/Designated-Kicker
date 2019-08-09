/* eslint-disable camelcase */
var db = require("../models");
// eslint-disable-next-line no-unused-vars
var isAuthenticated = require("../config/isAuth");

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
    var data = {
      name: { name: "aaron" },
      backers: { backers: "1230" },
      pledged: { pledged: "21321321" },
      category: { category: "art" },
      url: { url: "www.google.com" },
      blurb: { blurb: "this test better work" }
    };
    var hndlebarObj = {
      test: data
    };
    res.render("itemAdd", hndlebarObj);
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

// var data = {
//   name: "aaron",
//   backers: "1230",
//   pledged: "21321321",
//   category: "art",
//   url: "www.google.com",
//   blurb: "this test better work"
// };
// var hndlebarObj = {
//   test: data
// // };
// // db.kickstarterseed
// //   .findAll({ where: { parent_category: req.body } })
// //   .then(function(data) {
// //     var hndlebarObj = {
// //       test: data
// //     };
// res.render("itemAdd", hndlebarObj);
//   });
// res.render("itemAdd", hndlebarObj);
// console.log(hndlebarObj);
