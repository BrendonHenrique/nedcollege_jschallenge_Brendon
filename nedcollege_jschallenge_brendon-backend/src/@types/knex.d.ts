// eslint-disable-next-line no-unused-vars
import { Knex } from 'knex'
import { IBlogPost } from '../model/posts'

declare module 'knex/types/tables' {
  export interface Tables {
    posts: IBlogPost
  }
}
