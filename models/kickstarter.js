module.exports = function(sequelize, DataTypes) {
  var kickstarter = sequelize.define("kickstarter", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  });

  kickstarter.sync();

  return kickstarter;
};
