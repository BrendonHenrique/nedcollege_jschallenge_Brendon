import PostModel, { IPost } from '@/app/models/Post'
import { PostDTO } from '@/app/dtos/postDTO'

export const findAllPosts: () => Promise<IPost[]> = async () => {
  return PostModel.findAll()
}

export const findPostById: (id: string) => Promise<IPost | null> = async (
  id,
) => {
  return PostModel.findByPk(id)
}

export const deletePost: (id: string) => Promise<number> = async (id) => {
  return PostModel.destroy({
    where: {
      id,
    },
  })
}

export const createPost: (post: IPost) => Promise<IPost> = async (post) => {
  return PostModel.create(post)
}

export const updatePost = async (id: string, post: PostDTO) => {
  return PostModel.update(post, {
    where: {
      id,
    },
  })
}
