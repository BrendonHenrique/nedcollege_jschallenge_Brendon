import { knex as setupKnex, Knex } from 'knex'
import * as dotenv from 'dotenv'

dotenv.config()

export const config: Knex.Config = {
  client: process.env.DB_ClIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    extension: 'ts',
    directory: process.env.DB_MIGRATIONS,
  },
}

export const tables = {
  POSTS: 'posts',
}

export const knex = setupKnex(config)
