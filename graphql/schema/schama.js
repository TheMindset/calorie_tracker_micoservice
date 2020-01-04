const graphql = require('graphql')
const Recipe = require('../../models').Recipe

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
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
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})