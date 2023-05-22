import { Sequelize } from 'sequelize-typescript'
import { env } from '@/env'
import { Dialect } from 'sequelize'
import Models from '@/db/models'

const Database = new Sequelize({
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  dialect: env.DB_ClIENT as Dialect,
})

Database.addModels([Models.Post])

export default Database
