class recipeSerializer {
  constructor(foodType, recipe) {
    this.foodType = foodType,
    this.name = recipe.label
    this.recipeLink = recipe.url
    this.numberOfIngredients = recipe.ingredients.length
    this.totalCalories = Math.round(recipe.calories)
    this.preparationTime = Math.round(recipe.totalTime)
  }
}

module.exports = recipeSerializer