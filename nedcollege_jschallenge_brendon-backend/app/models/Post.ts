import { Table, Column, Model, DataType } from 'sequelize-typescript'

export interface IPost {
  id: string
  session_id?: string
  image: string
  category: string
  title: string
  author: string
  read_time: number
  text: string
}

@Table({})
export default class Post extends Model<IPost> {
  @Column({
    primaryKey: true,
    allowNull: false,
    unique: true,
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID,
  })
  id!: string

  @Column(DataType.UUID)
  session_id!: string

  @Column(DataType.STRING)
  image!: string

  @Column(DataType.STRING)
  category!: string

  @Column(DataType.STRING)
  title!: string

  @Column(DataType.STRING)
  author!: string

  @Column(DataType.INTEGER)
  read_time!: number

  @Column(DataType.TEXT)
  text!: string
}
