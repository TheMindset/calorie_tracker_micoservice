# Calorie Tracker Micro-Service

## About

Welcome to the _Calorie Tracker Micro-Service_. This is a micro-service that come with [Calorie Tracker](https://github.com/TheMindset/calorie_tracker), a project completed during the Module 4 of [Turing School of Software & Design](https://backend.turing.io/). 

### Technique Stack

* Node.js / Express

* Squelize / GraphQL

* Jest / Superset

## Endpoints

This service utilizes [GraphQL](https://graphql.org/).

### /graphql?=query={getAllRecipes{id,name}}

Returns a list of all recipes. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _getAllRecipes_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "getAllRecipes": [
      {
        "id": "1",
        "name": "Chicken Vesuvio"
      },
      {
        "id": "2",
        "name": "Chicken Gravy"
      },
      {
        "id": "3",
        "name": "Kreplach (Chicken Dumplings)"
      },
      {
        "id": "4",
        "name": "Chicken Marsala"
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={recipeSearch(foodType:"Curry Sauce"){id,name}}

Returns a list of all recipes filtered by food type. A _footType_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _recipeSearch_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "recipeSearch": [
 {
        "id": "51",
        "foodType": "Curry Sauce",
        "name": "Lobster with Curry Sauce"
      },
      {
        "id": "52",
        "foodType": "Curry Sauce",
        "name": "British Curry Sauce"
      },
      {
        "id": "57",
        "foodType": "Curry Sauce",
        "name": "Tofu with Thai Curry Sauce recipes"
      },
      {
        "id": "53",
        "foodType": "Curry Sauce",
        "name": "Banana-Leaf-Wrapped Grouper with Curry Sauce"
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={totalIngredients(numberOfIngredients:50){id,foodType,name,numberOfIngredients}}

Returns a list of all recipes with the specified number of ingredients. A _numberOfIngredients_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _totalIngredients_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "totalIngredients": [
      {
        "id": "21",
        "foodType": "Sushi",
        "name": "Perfect Sushi Rice recipes",
        "numberOfIngredients": 4
      },
      {
        "id": "29",
        "foodType": "Sushi",
        "name": "Sushi rolls",
        "numberOfIngredients": 7
      },
      {
        "id": "55",
        "foodType": "Curry Sauce",
        "name": "Coconut Shrimp with Red Curry Sauce",
        "numberOfIngredients": 14
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={totalPrepTime(preparationTime:20){id,foodType,name,preparationTime}}

Returns a list of all recipes with the specified preparation time. A _preparationTime_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _totalPrepTime_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "totalPrepTime": [
      {
        "id": "40",
        "foodType": "Banana",
        "name": "Banana Rum Cocktail",
        "preparationTime": 20
      },
      {
        "id": "49",
        "foodType": "Plantain Banana",
        "name": "Griddled Banana, Mango, and Jalapeño Sandwiches",
        "preparationTime": 20
      },
      {
        "id": "57",
        "foodType": "Curry Sauce",
        "name": "Tofu with Thai Curry Sauce recipes",
        "preparationTime": 20
      },
      {
        "id": "53",
        "foodType": "Curry Sauce",
        "name": "Banana-Leaf-Wrapped Grouper with Curry Sauce",
        "preparationTime": 20
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={averageCalories(foodType:"Sushi"){average}}

Returns the total average calorie for all recipes with the specified food type. A _foodType_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _averageCalories_ are:

* foodType

* average

#### Example of expected output:

<details>

```json
{
  "data": {
    "averageCalories": [
      {
        "foodType": "Sushi",
        "average": 1036.9
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={sortIngredients(foodType:"Banana"){id, name, numberOfIngredients}}

Returns a list of all recipes with the specified food type, sorted by the number of ingredients from the least to the greatest. A _foodType_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _sortIngredients_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "sortIngredients": [
      {
        "id": "34",
        "name": "Banana Snack Wraps recipes",
        "numberOfIngredients": 3
      },
      {
        "id": "38",
        "name": "Chocolate & Banana recipes",
        "numberOfIngredients": 3
      },
      {
        "id": "31",
        "name": "Banana-Blueberry Smoothie",
        "numberOfIngredients": 3
      },
      {
        "id": "40",
        "name": "Banana Rum Cocktail",
        "numberOfIngredients": 4
      },
      {
        "id": "32",
        "name": "Banana in golden syrup",
        "numberOfIngredients": 4
      },
      {
        "id": "39",
        "name": "Banana Pineapple Green Drink",
        "numberOfIngredients": 4
      },
      {
        "id": "37",
        "name": "Banana Cookies recipes",
        "numberOfIngredients": 5
      },
      {
        "id": "33",
        "name": "Campfire Banana Boat Chocolate Caramel S'mores recipes",
        "numberOfIngredients": 5
      },
      {
        "id": "35",
        "name": "Banana Daquiri",
        "numberOfIngredients": 6
      },
      {
        "id": "36",
        "name": "Banana Pudding",
        "numberOfIngredients": 14
      }
    ]
  }
}
```
</details>

---

### /graphql?=query={sortPrepTime(foodType:"Chicken"){id,name,preparationTime}}

Returns a list of all recipes with the specified food type, sorted by the preparation time from the least to the greatest. A _foodType_ argument is required. Additional attributes should be included as comma separated values without any spacing.
Available attributes for _sortPrepTime_ are:

* id

* name

* foodType

* recipeLink

* numberOfIngredients

* totalCalories

* totalPrepTime

#### Example of expected output:

<details>

```json
{
  "data": {
    "sortPrepTime": [
      {
        "id": "3",
        "name": "Kreplach (Chicken Dumplings)",
        "preparationTime": 10
      },
      {
        "id": "9",
        "name": "Chicken Saltimbocca",
        "preparationTime": 35
      },
      {
        "id": "1",
        "name": "Chicken Vesuvio",
        "preparationTime": 60
      },
      {
        "id": "6",
        "name": "Chicken cacciatore",
        "preparationTime": 60
      },
      {
        "id": "10",
        "name": "Easy Chicken Stock",
        "preparationTime": 90
      },
      {
        "id": "8",
        "name": "Chicken Soup",
        "preparationTime": 120
      }
    ]
  }
}
```
</details>

---

## Get Started

### Requirements

* [Node 12.13.1](https://nodejs.org/en/download/) - Node Version
* [PostgresQL](https://www.postgresql.org/download/)

### Clone 

```
$ git clone git@github.com:TheMindset/calorie_tracker.git
$ cd calorie_tracker
$ npm install
```

### Setup Database

* Create a `.env` file in the main directory.

* Define `DB_USERNAME` within within `.env` as your Postgres username.

* Define `DB_DATABASE` within within `.env` as `calorie_tracker_microservice_development`.

* Run this command from the `calorie_tracker_microservice` project directory.

```
$ npx sequelize db:create
$ npx sequelize db:migrate

```

The database is seeded with the [Edaman API](https://developer.edamam.com/).
In order to utilize it in this _Micro-service_ you will need:

* Create an application on the [Edaman API](https://developer.edamam.com/) website.

* Define your **application's `EDAMAN_APP_ID` within the `.env`.**

* Define your **application's `EDAMAN_APP_KEY` within the `.env`.**

* Seed the database with this command:

```bash
$ npx jake fetchData[NAME_OF_YOUR_FAVORITE_FOOD]
```

#### :heavy_exclamation_mark: If you use [zsh](https://ohmyz.sh/)

* Seed the database by adding **single quote** on the command like this:

```bash
$ npx jake 'fetchData[NAME_OF_YOUR_FAVORITE_FOOD]'
```

### API Exploration

Once installation and database setup are complete, explore the various API endpoints with the following steps:
* From the `calorie_tracker_microservice` project directory, start up the server `$ npm start`
* Open your browser, and visit `http://localhost:3000/`
* Query the available endpoints by appending to `http://localhost:3000/` in your browser.

### Running Tests

You can run the tests implemented with Jest by run this command `$ npm test`.

#### Exemple of expected output
```bash 
Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        4.766s
Ran all test suites.
```