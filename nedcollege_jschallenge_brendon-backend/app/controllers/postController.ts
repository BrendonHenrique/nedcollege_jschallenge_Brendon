import { Request, Response } from 'express'
import * as postService from '@/app/services/postService'
import * as Errors from '@/app/errors'

export const getAllPosts = async (_: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    if (error instanceof Errors.NotFoundError) {
      res.status(404).json({ error: error.message })
    } else {
      res.status(500).json({ error: (error as Errors.InternalError).message })
    }
  }
}

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const post = await postService.getPostById(id)
    res.status(200).json(post)
  } catch (error) {
    if (error instanceof Errors.NotFoundError) {
      res.status(404).json({ error: error.message })
    } else {
      res.status(500).json({ error: (error as Errors.InternalError).message })
    }
  }
}

export const deletePostById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    await postService.deletePostById(id)
    res.status(202).json({ msg: 'Success on delete post' })
  } catch (error) {
    if (error instanceof Errors.NotFoundError) {
      res.status(404).json({ error: error.message })
    } else {
      res.status(500).json({ error: (error as Errors.InternalError).message })
    }
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const post = await postService.createPost(body)
    res.status(201).json({
      msg: 'Success on create post',
      post,
    })
  } catch (error) {
    if (error instanceof Errors.NotCreatedError) {
      res.status(404).json({ error: error.message })
    } else {
      res.status(500).json({ error: (error as Errors.InternalError).message })
    }
  }
}

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const body = req.body
    const post = await postService.updatePost(id, body)
    res.status(200).json({
      msg: 'Success on update post',
      post,
    })
  } catch (error) {
    if (error instanceof Errors.NotUpdatedError) {
      res.status(404).json({ error: error.message })
    } else {
      res.status(500).json({ error: (error as Errors.InternalError).message })
    }
  }
}
