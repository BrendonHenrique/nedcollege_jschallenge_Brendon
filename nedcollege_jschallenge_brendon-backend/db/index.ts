import { Sequelize } from 'sequelize-typescript'
import path from 'path'

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config.json')[env]

const sequelize = new Sequelize({
  ...config,
  models: [path.join(__dirname, './models')],
})

export default sequelize
