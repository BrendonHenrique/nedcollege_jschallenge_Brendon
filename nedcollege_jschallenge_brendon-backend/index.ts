import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import crypto from 'node:crypto'
import { knex, tables } from './src/db'
import { IBlogPost } from './src/model/posts'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/api', async (req: Request, res: Response) => {
  try {
    const newPost: IBlogPost = {
      id: crypto.randomUUID(),
      image: 'data:image/png;base64,iVBORw0KG...',
      category: 'Travel',
      title: 'Post 1',
      author: 'Brendon',
      read_time: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }

    await knex(tables.POSTS).insert(newPost)

    const posts: IBlogPost[] = await knex(tables.POSTS).select('*')

    return res.json(posts)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

app.listen(port, () => {
  console.log(`foo[server]: Server is running at http://localhost:${port}`)
})
