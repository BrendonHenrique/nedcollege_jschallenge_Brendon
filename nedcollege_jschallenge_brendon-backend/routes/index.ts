import express, { Response } from 'express'
import Post from '@/db/models/Post'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
    console.error('Error retrieving posts:', error)
    res.status(500).json({ error: 'Failed to retrieve posts' })
  }
})

export default router
