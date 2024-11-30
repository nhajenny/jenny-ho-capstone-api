import ticketsData from '../seed-data/tickets_data.js'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tickets').del();
  await knex('tickets').insert(ticketsData);
};
