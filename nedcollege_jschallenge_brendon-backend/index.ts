import express, { Express } from 'express'
import routes from '@/routes'
import { env } from '@/env'
import sequelize from '@/db'

sequelize.sync()

const app: Express = express()

app.use(express.json())

app.use('/api', routes)

app.listen(env.PORT, () => {
  console.log(`foo[server]: Server is running at http://localhost:${env.PORT}`)
})
