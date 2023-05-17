export interface IBlogPost {
  id: string
  session_id?: string
  image: string
  category: string
  title: string
  author: string
  created_at?: Date
  read_time: number
  text: string
}
