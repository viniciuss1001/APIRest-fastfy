import {knex}  from "knex"

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: './temp/app.db'
    }
  }

}

module.exports = config
