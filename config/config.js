module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "calorie_tracker_microservice_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "calorie_tracker_microservice_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": "DATABASE_URL",
    "operatorsAliases": 0
  }
}
