/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
var db = require("../models");

module.exports = function(app) {
  app.post("/add", function(req, resp) {
    console.log("/add post route here");
    console.log(req.body.storage + "storage line 28");
    var projectName = req.body.name;
    db.Userprojects.create({
      project_name: projectName,
      category: req.body.category,
      product_description: req.body.blurb,
      image_link: req.body.image,
      city: req.body.city,
      state: req.body.state,
      pledge_goal: req.body.pledge
      // eslint-disable-next-line no-empty-function
    }).then(function() {});
  });
};
