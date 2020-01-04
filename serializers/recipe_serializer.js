class recipeSerializer {
  constructor(food, recipe) {
    this.foodType = food,
    this.name = recipe.label
    this.recipeLink = recipe.url
    this.numberOfIngredients = recipe.ingredients.length
    this.totalCalories = Math.round(recipe.calories * 100) / 100
    this.preparationTime = Math.round(recipe.totalTime)
  }
}