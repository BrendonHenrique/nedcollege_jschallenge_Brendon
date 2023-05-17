import { knex as setupKnex, Knex } from 'knex'
import { env } from '../env'

export const config: Knex.Config = {
  client: env.DB_ClIENT,
  connection: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  migrations: {
    extension: 'ts',
    directory: env.DB_MIGRATIONS,
  },
}

export const tables = {
  POSTS: 'posts',
}

export const knex = setupKnex(config)
