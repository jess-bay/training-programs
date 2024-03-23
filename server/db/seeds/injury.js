/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('injuries').del()
  await knex('injuries').insert([
    { id: 1, injury_name: 'back injury' },
    { id: 2, injury_name: 'knee injury' },
    { id: 3, injury_name: 'hip injury' },
  ])
}
