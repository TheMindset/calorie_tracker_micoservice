const { task, desc } = require('jake')
const fetch = require('node-fetch')

desc('Seed database from Edaman API.')

task('fetchData', {async: true }, (food) => {
  fetch(`https://api.edamam.com/search?q=${food}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&from=0&to=5`)
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

