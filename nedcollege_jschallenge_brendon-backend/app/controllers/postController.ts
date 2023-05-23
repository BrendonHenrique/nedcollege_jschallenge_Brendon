import { Request, Response } from 'express'
import * as postService from '@/app/services/postService'

export const getAllPosts = async (_: Request, res: Response) => {
  try {
    const posts = await postService.getAllPosts()

    if (!!posts.length) res.status(200).json(posts)
    else res.status(404).json({ msg: 'Posts are empty' })
  } catch (error) {
    console.error('Failed to retrieve posts:', error)
    res.status(500).json({ error: 'Failed to retrieve posts' })
  }
}

export const getPostById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const post = await postService.getPostById(id)

    if (!!post) res.status(200).json(post)
    else res.status(404).json({ msg: 'Post not found' })
  } catch (error) {
    console.error('Failed to retrieve post:', error)
    res.status(500).json({ error: 'Failed to retrieve post' })
  }
}

export const deletePostById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const isDeleted = await postService.deletePostById(id)

    if (isDeleted) res.status(202).json({ msg: 'Success on delete post' })
    else res.status(404).json({ error: 'Post was not found to be deleted' })
  } catch (error) {
    console.error('Failed to delete post:', error)
    res.status(500).json({ error: 'Failed to delete post' })
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const newPost = await postService.createPost(body)

    if (!!newPost) res.status(201).json(newPost)
    else res.status(500).json({ error: 'Failed to create new post' })
  } catch (error) {
    console.error('Failed to create new post:', error)
    res.status(500).json({ error: 'Failed to create new post' })
  }
}

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const body = req.body
    const updatedPost = await postService.updatePost(id, body)

    if (!!updatedPost) res.status(200).json(updatedPost)
    else res.status(404).json({ msg: 'Post not found' })
  } catch (error) {
    console.error('Failed to update post:', error)
    res.status(500).json({ error: 'Failed to update post' })
  }
}
