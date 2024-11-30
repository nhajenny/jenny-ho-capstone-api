import festivalData from '../seed-data/festival_data.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('festival').del()
  await knex('festival').insert(festivalData);
}