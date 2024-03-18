import { knex as SetupKnex } from 'knex'

export const configKnex = {
  client: 'sqlite3',
  connection: {
    filename: './temp/app.db',
  },
  useNullAsDefault: true,
}

export const knex = SetupKnex(configKnex)
