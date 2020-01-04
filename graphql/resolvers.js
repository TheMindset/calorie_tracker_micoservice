const graphql = require('graphql')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')

const Recipe = require('../models').Recipe

class RecipeResolver {
  static getAllRecipes() {
    return Recipe.findAll({
      where: args
    })
  }

  static recipeSearch(foodType) {
    return Recipe.findAll({
      where: foodType
    })
  }

}

module.exports = RecipeResolver