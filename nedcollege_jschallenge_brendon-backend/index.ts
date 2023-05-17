import express, { Express } from 'express'
import { env } from './src/env'
import routes from './src/routes'

const app: Express = express()

app.use(express.json())

app.use('/api', routes)

app.listen(env.PORT, () => {
  console.log(`foo[server]: Server is running at http://localhost:${env.PORT}`)
})
