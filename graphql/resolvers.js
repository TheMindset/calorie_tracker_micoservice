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

  static averageCalorie(foodType) {
    return Recipe.findAll({
      where: foodType,
      attributes: [
        'Recipe.foodType', 
        [Sequelize.fn('avg',Sequelize.col('totalCalories')), 'average'],
      ],
      group: ['Recipe.foodType'],
      raw: true
    })
  }

  static sortAttributes(foodType, attribute) {
    return Recipe.findAll({
      where: foodType,      
      order: [[attribute]]
    })
  }

  static totalPrepTime(value) {
    return Recipe.findAll({
      where: {
        preparationTime: {
          [Op.eq]: Object.values(value)
        }
      }
    })
  }

  static totalIngredients(value) {
    return Recipe.findAll({
      where: {
        preparationTime: {
          [Op.eq]: Object.values(value)
        }
      }
    })
  }

}

module.exports = RecipeResolver