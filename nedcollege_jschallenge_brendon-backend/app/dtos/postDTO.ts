import { IPost } from '@/app/models/Post'

interface PostDTO
  extends Pick<IPost, 'title' | 'image' | 'category' | 'author' | 'text'> {}

export { PostDTO }
