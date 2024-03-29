/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      id: 1,
      name: 'squats',
      reps: 10,
      sets: 2,
      description: 'knees above toes, move hips back, back straight',
      category: 'lower',
    },
    {
      id: 2,
      name: 'lunges',
      reps: 10,
      sets: 2,
      description: 'knees above toes, move hips back, back straight',
      category: 'lower',
    },
    {
      id: 3,
      name: 'deadlifts',
      reps: 10,
      sets: 2,
      description: 'knees above toes, move hips back, back straight',
      category: 'lower',
    },
  ])
}
