var db = require("../models");

module.exports = function(app) {
  // Load index page
  var main = ["/", "/main"];
  main.forEach(function(path) {
    app.get(path, function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.render("index", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/startSearch", function(req, res) {
    var completed = {
      startSearch: true
    };
    res.render("index", completed);
  });
  app.get("/displayResults", function(req, res) {
    res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
