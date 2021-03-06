'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {sequelize});
  Category.associate = function(models) {
    Category.hasMany(models.Product)
    // associations can be defined here
  };
  return Category;
};