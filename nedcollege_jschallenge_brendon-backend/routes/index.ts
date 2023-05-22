import express, { Request, Response } from 'express'
import Post, { IPost } from '@/db/models/Post'
import * as utils from '@/utils'

const router = express.Router()

router.get('/', async (_, res: Response) => {
  try {
    const posts: IPost[] = await Post.findAll()
    res.json(posts)
  } catch (error) {
    console.error('Error retrieving posts:', error)
    res.status(500).json({ error: 'Failed to retrieve posts' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await Post.findAll({
      where: {
        id: req.params.id,
      },
    })
    res.json(post)
  } catch (error) {
    console.error('Error retrieving post:', error)
    res.status(500).json({ error: 'Failed to retrieve post' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.json(post)
  } catch (error) {
    console.error('Error deleting post:', error)
    res.status(500).json({ error: 'Failed to deleting post' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const body: Pick<
      IPost,
      'title' | 'image' | 'category' | 'author' | 'text'
    > = req.body

    const post: IPost = {
      read_time: utils.calculateReadTime(body.text),
      id: utils.createUUID(),
      ...body,
    }

    const newPost = await Post.create(post)
    res.json(newPost)
  } catch (error) {
    console.error('Error creating new post:', error)
    res.status(500).json({ error: 'Failed to creating new post' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const body: Pick<
      IPost,
      'title' | 'image' | 'category' | 'author' | 'text'
    > = req.body

    const post: IPost = {
      read_time: utils.calculateReadTime(body.text),
      id: utils.createUUID(),
      ...body,
    }

    const updatedPost = await Post.update(
      { ...post },
      {
        where: {
          id: req.params.id,
        },
      },
    )

    res.json(updatedPost)
  } catch (error) {
    console.error('Error updating post:', error)
    res.status(500).json({ error: 'Failed to updating post' })
  }
})

export default router
