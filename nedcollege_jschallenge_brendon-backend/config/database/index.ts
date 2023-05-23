import { Sequelize } from 'sequelize-typescript'
import { env } from '@/config/env'
import { Dialect } from 'sequelize'
import Post from '@/app/models/Post'

const Database = new Sequelize({
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  dialect: env.DB_ClIENT as Dialect,
})

Database.addModels([Post])

export default Database
