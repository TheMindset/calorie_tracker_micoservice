const app = require('../../app')
const request = require('supertest')

const Recipe = require('../../models').Recipe
const cleanup = require('../helpers/test_clear_database')

describe('Recipe api endpoint', () => {
  beforeEach(async () => {
    await cleanup()
    await Recipe.bulkCreate([
      {
        "name": "Chicken Vesuvio",
        "foodType": "Chicken",
        "recipeLink": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
        "numberOfIngredients": 11,
        "totalCalories": 4056,
        "preparationTime": 60
      },
      {
        "name": "Chicken Gravy",
        "foodType": "Chicken",
        "recipeLink": "http://www.marthastewart.com/332664/chicken-gravy",
        "numberOfIngredients": 7,
        "totalCalories": 1092,
        "preparationTime": 270
      },
      {
        "name": "Kreplach (Chicken Dumplings)",
        "foodType": "Chicken",
        "recipeLink": "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
        "numberOfIngredients": 9,
        "totalCalories": 4279,
        "preparationTime": 10
      }
    ])
  })

  test('should return all recipes', () => {
    return request(app)
    .get('/graphql?query={getAllRecipes{id,name,foodType,recipeLink,numberOfIngredients,totalCalories,preparationTime}}')
    .then(response => {
      expect(response.statusCode).toBe(200)

      expect(response.body.data.getAllRecipes.length).toBe(3)

      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('id')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('name')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('foodType')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('recipeLink')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('numberOfIngredients')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('totalCalories')
      expect(Object.keys(response.body.data.getAllRecipes[0])).toContain('preparationTime')
    })
  })

  test('should return recipes by food type', () => {
    return request(app)
    .get('/graphql?query={recipeSearch(foodType: "Chicken"){name,foodType}}')
    .then(response => {
      console.log(response.body)
      expect(response.statusCode).toBe(200)

      expect(response.body.data.recipeSearch.length).toBe(3)
      expect(Object.keys(response.body.data.recipeSearch[0])).toContain('name')
      expect(Object.keys(response.body.data.recipeSearch[0])).toContain('foodType')
    })
  })

  test('should return food by the number of ingredients', () => {
    return request(app)
    .get('/graphql?query={totalIngredients(numberOfIngredients:10){id,name}}')
    .then(response => {
      expect(response.statusCode).toBe(200)

      expect(response.body.data.totalIngredients.length).toBe(1)
      expect(Object.keys(response.body.data.totalIngredients[0])).toContain('id')
      expect(Object.keys(response.body.data.totalIngredients[0])).toContain('name')
    })
  })
  
  test('should return food by the preparation time', () => {
    return request(app)
    .get('/graphql?query={totalPrepTime(preparationTime:270){id,name}}')
    .then(response => {
      expect(response.statusCode).toBe(200)

      expect(response.body.data.totalPrepTime.length).toBe(1)
      expect(Object.keys(response.body.data.totalPrepTime[0])).toContain('id')
      expect(Object.keys(response.body.data.totalPrepTime[0])).toContain('name')
    })
  })

})
