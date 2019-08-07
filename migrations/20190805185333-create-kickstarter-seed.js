/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("kickstarterseeds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      backers_count: {
        type: Sequelize.INTEGER
      },
      blurb: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      pledged: {
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING
      },
      source_url: {
        type: Sequelize.STRING
      },
      usd_pledged: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      category_name: {
        type: Sequelize.STRING
      },
      parent_category: {
        type: Sequelize.STRING
      },
      location_city: {
        type: Sequelize.STRING
      },
      location_state: {
        type: Sequelize.STRING
      },
      urls: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("kickstarterseeds");
  }
};
