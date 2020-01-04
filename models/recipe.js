'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    foodType: DataTypes.STRING,
    recipeLink: DataTypes.STRING,
    numberOfIngredients: DataTypes.INTEGER,
    totalCalories: DataTypes.INTEGER,
    preparationTime: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};