import express, { Request, Response } from 'express'
import crypto from 'node:crypto'
import { knex } from '../../src/db'
import { IBlogPost } from '../../src/model/posts'
import { z } from 'zod'
import * as utils from '../utils'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
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

    await knex('posts').insert(newPost)

    const posts: IBlogPost[] = await knex('posts').select('*')

    return res.json(posts)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  const postSchema = z.object({
    title: z.string(),
    image: z.string(),
    category: z.string(),
    author: z.string(),
    text: z.string(),
  })

  const { title, image, category, author, text } = postSchema.parse(req.body)

  await knex('posts').insert({
    id: crypto.randomUUID(),
    image,
    category,
    title,
    author,
    read_time: utils.calculateReadTime(text),
    text,
  })

  res.status(201).send('New post created successfully')
})

export default router
