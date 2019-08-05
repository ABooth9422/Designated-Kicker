var db = require("../models");

module.exports = function(app) {
  app.post("/search", function(req, resp) {
    console.log("post here in apiRoutes");
    console.log(resp.data);
    db.kickstarter
      .findAll(
        {
          where: {
            category: resp
          }
        },
        { raw: true }
      )
      .then(function(data) {
        console.log("callback data" + data);
        resp.status(201).end();
      });
  });

  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });
  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
