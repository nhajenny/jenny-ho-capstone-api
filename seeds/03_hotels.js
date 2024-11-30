import hotelsData from '../seed-data/hotels_data.js'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('hotels').del()
  await knex('hotels').insert(hotelsData)
}
