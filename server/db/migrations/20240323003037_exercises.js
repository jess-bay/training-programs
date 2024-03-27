/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('reps')
    table.integer('sets')
    table.string('description')
    table.string('category')
    table.integer('injury_id').references('injuries.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('exercises')
}
