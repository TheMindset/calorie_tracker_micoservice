const graphql = require('graphql')
const Sequelize = require('sequelize')
const Recipe = require('../../models').Recipe

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat
} = graphql


const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: {type: GraphQLID},
    foodType: {type: GraphQLString},
    name: {type: GraphQLString},
    recipeLink: {type: GraphQLString},
    numberOfIngredients: {type: GraphQLInt},
    totalCalories: {type: GraphQLInt},
    preparationTime: {type: GraphQLInt}

  })
})

const averageCalorieCount = new GraphQLObjectType({
  name: 'averageCalorieCount',
  fields: () => ({
    foodType: {type: GraphQLString},
    average: {type: GraphQLFloat}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getRecipe: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: args
        })
      }
    },
    getAllRecipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return Recipe.findAll()
      }
    },
    getAverageCalorieCount: {
      type: new GraphQLList(averageCalorieCount),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: args,
          attributes: [
            'Recipe.foodType', 
            [Sequelize.fn('avg',Sequelize.col('totalCalories')), 'average'],
          ],
          group: ['Recipe.foodType'],
          raw: true
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})