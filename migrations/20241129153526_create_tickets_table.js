/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("tickets", (table) => {
        table.increments("id").primary();
        table
            .integer("festival_id")
            .unsigned()
            .references("id")
            .inTable("festival")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("ticket_type").notNullable();
        table.decimal("price").notNullable();
        table.string("currency", 3).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("tickets");
}
