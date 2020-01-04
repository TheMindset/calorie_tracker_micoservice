const graphql = require('graphql')
const Op = require('sequelize').Op
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
    averageCalorie: {
      type: new GraphQLList(averageCalorieQuery),
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
    },
    sortIngredient: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: args,      
          order: [['numberOfIngredients']]
        })
      }
    },
    sortPrepTime: {
      type: new GraphQLList(RecipeType),
      args: {foodType: {type: GraphQLString}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: args,      
          order: [['preparationTime']]
        })
      }
    },
    totalIngredients: {
      type: new GraphQLList(RecipeType),
      args: {numberOfIngredients: {type: GraphQLInt}},
      resolve(parent, args) {
        console.log(args.values)
        return Recipe.findAll({
         
          where: {
            numberOfIngredients: {
              [Op.eq]: Object.values(args)
            }
          }
        })
      }
    },
    totalIngredients: {
      type: new GraphQLList(RecipeType),
      args: {numberOfIngredients: {type: GraphQLInt}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: {
            numberOfIngredients: {
              [Op.eq]: Object.values(args)
            }
          }
        })
      }
    },
    totalPrepTime: {
      type: new GraphQLList(RecipeType),
      args: {preparationTime: {type: GraphQLInt}},
      resolve(parent, args) {
        return Recipe.findAll({
          where: {
            preparationTime: {
              [Op.eq]: Object.values(args)
            }
          }
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})