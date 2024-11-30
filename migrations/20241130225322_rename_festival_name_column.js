/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.alterTable('festival', (table) => {
      table.renameColumn('festiva;_name', 'festival_name'); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.alterTable('festival', (table) => {
      table.renameColumn('festival_name', 'festiva;_name'); 
    });
  }
  