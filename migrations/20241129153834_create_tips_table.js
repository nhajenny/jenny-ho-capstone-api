/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("tips", (table) => {
        table.increments("id").primary();
        table
            .integer("festival_id")
            .unsigned()
            .references("id")
            .inTable("festival")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("name").notNullable();
        table.string("year_attended").notNullable();
        table.string("tip").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("tips");
}
