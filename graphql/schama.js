const graphql = require('graphql')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')

const Recipe = require('../models').Recipe
const RecipeResolver = require('./resolvers')

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
    preparationTime: {type: GraphQLInt},
  })
})

const averageCalorieQuery = new GraphQLObjectType({
  name: 'averageCalorie',
  fields: () => ({
    foodType: {type: GraphQLString},
    average: {type: GraphQLFloat},
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    recipeSearch: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return RecipeResolver.recipeSearch(args)
      }
    },
    getAllRecipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return RecipeResolver.getAllRecipes
      }
    },
    averageCalorie: {
      type: new GraphQLList(averageCalorieQuery),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return RecipeResolver.averageCalorie(args)
      }
    },
    sortIngredient: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return RecipeResolver.sortAttributes(args, 'numberOfIngredients')
      }
    },
    sortPrepTime: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return RecipeResolver.sortAttributes(args, 'preparationTime')
      }
    },
    totalIngredients: {
      type: new GraphQLList(RecipeType),
      args: {numberOfIngredients: {type: GraphQLInt}},
      resolve(parent, args) {
        return RecipeResolver.totalIngredients(args)
      }
    },
    totalPrepTime: {
      type: new GraphQLList(RecipeType),
      args: {preparationTime: {type: GraphQLInt}},
      resolve(parent, args) {
        return RecipeResolver.totalPrepTime(args)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})