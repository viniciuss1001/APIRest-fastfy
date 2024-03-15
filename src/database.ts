export const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './temp/app.db',
  },
})
