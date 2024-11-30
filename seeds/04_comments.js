import commentsData from '../seed-data/comments_data.js'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert(commentsData)
}
