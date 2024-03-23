/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.increments('id')
    table.string('exercise_name')
    table.integer('reps')
    table.integer('sets')
    table.string('description')
    table.string('category')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('exercises')
}
