/* eslint-disable camelcase */
"use strict";
module.exports = function(sequelize, DataTypes) {
  var Userprojects = sequelize.define(
    "Userprojects",
    {
      project_name: DataTypes.STRING,
      category: DataTypes.STRING,
      product_description: DataTypes.STRING,
      image_link: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pledge_goal: DataTypes.INTEGER
    },
    {}
  );
  return Userprojects;
};
