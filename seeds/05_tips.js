import tipsData from '../seed-data/tips_data.js'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tips').del()
  await knex('tips').insert(tipsData)
};
