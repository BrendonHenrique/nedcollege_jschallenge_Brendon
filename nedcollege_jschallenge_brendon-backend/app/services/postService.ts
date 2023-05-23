import * as postRepository from '@/app/repositories/postRepository'
import * as Utils from '@/utils'
import * as Errors from '@/app/errors'
import { PostDTO } from '@/app/dtos/postDTO'

export const getAllPosts = async () => {
  const posts = await postRepository.findAllPosts()

  if (!posts.length) {
    throw new Errors.NotFoundError('Posts are empty')
  }

  return posts
}

export const getPostById = async (id: string) => {
  const post = await postRepository.findPostById(id)

  if (!post) {
    throw new Errors.NotFoundError()
  }

  return post
}

export const deletePostById = async (id: string) => {
  const affectedRows = await postRepository.deletePost(id)

  if (!affectedRows) {
    throw new Errors.NotDeletedError()
  }

  return true
}

export const createPost = async (postDTO: PostDTO) => {
  const post = {
    read_time: Utils.calculateReadTime(postDTO.text),
    id: Utils.createUUID(),
    ...postDTO,
  }

  const newPost = await postRepository.createPost(post)

  if (!newPost) {
    throw new Errors.NotCreatedError()
  }

  return post
}

export const updatePost = async (id: string, postDTO: PostDTO) => {
  const post = {
    read_time: Utils.calculateReadTime(postDTO.text),
    id,
    ...postDTO,
  }

  await postRepository.updatePost(id, post)

  const updatedPost = postRepository.findPostById(id)

  if (!updatedPost) {
    throw new Errors.NotUpdatedError()
  }

  return updatedPost
}
