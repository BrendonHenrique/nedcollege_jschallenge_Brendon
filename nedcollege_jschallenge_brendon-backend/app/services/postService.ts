import * as postRepository from '@/app/repositories/postRepository'
import { PostDTO } from '@/app/dtos/postDTO'
import * as utils from '@/utils'

export const getAllPosts = async () => {
  return postRepository.findAllPosts()
}

export const getPostById = async (id: string) => {
  return postRepository.findPostById(id)
}

export const deletePostById = async (id: string) => {
  const affectedRows = await postRepository.deletePost(id)
  return affectedRows > 0
}

export const createPost = async (postDTO: PostDTO) => {
  const post = {
    read_time: utils.calculateReadTime(postDTO.text),
    id: utils.createUUID(),
    ...postDTO,
  }
  return postRepository.createPost(post)
}

export const updatePost = async (id: string, postDTO: PostDTO) => {
  const post = {
    read_time: utils.calculateReadTime(postDTO.text),
    id,
    ...postDTO,
  }
  await postRepository.updatePost(id, post)
  return postRepository.findPostById(id)
}
