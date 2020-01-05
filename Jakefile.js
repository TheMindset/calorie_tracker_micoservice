require('dotenv').config()

const fetch = require('node-fetch')
const Recipe = require('./models').Recipe
const recipeSerializer = require('./serializers/recipe_serializer')
const toTitleCase = require('./helpers/title_case')

const { task, desc } = require('jake')

desc('Seed database from Edaman API.')

task('fetchData', {async: true }, (food) => {

  
  fetch(`https://api.edamam.com/search?q=${toTitleCase(food)}&app_id=${process.env.EDAMAN_APP_ID}&app_key=${process.env.EDAMAN_APP_KEY}&from=0&to=10&time=1%2B`)
  .then(response => {
    return response.json()
  })
  .then(foodData => {
    const foodType = foodData.q

    foodData.hits.forEach(recipeData => {
      let serializeRecipe = new recipeSerializer(foodType, recipeData.recipe)
      
      return Recipe.create(serializeRecipe)
      .then(() => {
        console.log(`${foodType} fetching successfuly`)
      })
    })
  })
})

