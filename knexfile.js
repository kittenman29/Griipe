
// require('dotenv').config()

const localPgConnection = {
  host: 'localhost',
  database: 'griipe',
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD
}

const prodDBConnection = process.env.DATABASE_URL || localPgConnection

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/griipe.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: prodDBConnection, // an object or a string
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};
