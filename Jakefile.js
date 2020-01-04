require('dotenv').config()

const { task, desc } = require('jake')
const fetch = require('node-fetch')

const Recipe = require('./models').Recipe

const recipeSerializer = require('./serializers/recipe_serializer')

desc('Seed database from Edaman API.')

task('fetchData', {async: true }, (food) => {
  fetch(`https://api.edamam.com/search?q=${food}&app_id=${process.env.EDAMAN_APP_ID}&app_key=${process.env.EDAMAN_APP_KEY}&from=0&to=5&time=1%2B`)
  .then(response => {
    return response.json()
  })
  .then(foodData => {
    foodData.hits.forEach(recipe => {
      let serializeRecipe = new recipeSerializer.new(food, recipe)
      let cleanRecipe = Recipe.build(serializeRecipe)
      cleanRecipe.save
    })
  })
})

