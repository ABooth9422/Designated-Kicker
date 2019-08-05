'use strict';
module.exports = (sequelize, DataTypes) => {
  const kickstarterseed = sequelize.define('kickstarterseed', {
    backers_count: DataTypes.INTEGER,
    blurb: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    pledged: DataTypes.INTEGER,
    slug: DataTypes.STRING,
    source_url: DataTypes.STRING,
    usd_pledged: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    parent_category: DataTypes.STRING,
    location_city: DataTypes.STRING,
    location_state: DataTypes.STRING,
    urls: DataTypes.STRING,
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notNull: false
      }
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notNull: false
      }
    },
  }, {});
  kickstarterseed.associate = function(models) {
    // associations can be defined here
  };
  return kickstarterseed;
};