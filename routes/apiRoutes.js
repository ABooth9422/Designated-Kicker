/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
var db = require("../models");

module.exports = function(app) {
  app.post("/search", function(req, resp) {
    console.log("post here in apiRoutes");
    console.log(req.body.cat);
    var cat = req.body.cat;
    console.log(cat);
  });

  app.post("/add", function(req, resp) {
    console.log("/add post route here");
    console.log(req.body.name);
    var projectName = req.body.name;
    db.Userprojects.create({
      project_name: projectName,
      category: req.body.category,
      product_description: req.body.blurb,
      image_link: req.body.image,
      city: req.body.city,
      state: req.body.state,
      pledge_goal: req.body.pledge
    }).then(function(data) {
      console.log(data);
    });
  });
};
