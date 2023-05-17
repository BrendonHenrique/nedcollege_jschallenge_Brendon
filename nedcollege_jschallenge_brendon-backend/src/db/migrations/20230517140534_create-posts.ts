/* eslint-disable no-unused-expressions */
import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('posts', (table) => {
    table.uuid('id').primary()
    table.uuid('session_id').index()
    table.binary('image').notNullable()
    table.text('category').notNullable()
    table.text('title').notNullable()
    table.text('author').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.integer('read_time').notNullable()
    table.text('text').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts')
}
