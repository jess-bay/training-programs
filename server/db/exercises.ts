import connection from './connection'
import { Exercise } from '../../models/exercise'

const db = connection

export async function getAllExercises(): Promise<Exercise[] | undefined> {
  try {
    return db('exercises').select()
  } catch (error) {
    console.error('error filtering exercises', error)
  }
}

export async function getExerciseById(
  id: number,
): Promise<Exercise | undefined> {
  try {
    return db('exercises').where({ id }).select().first()
  } catch (error) {
    console.error('error filtering exercises', error)
  }
}

export async function filterExercisesByCategory(
  category: string,
): Promise<Exercise[] | undefined> {
  try {
    const filteredCategoryExercise = await db('exercises')
      .select()
      .where('exercises.category', category)
    return filteredCategoryExercise
  } catch (error) {
    console.error('error filtering exercises', error)
  }
}

export async function filterExercisesByInjury(
  injuryCategory: string,
): Promise<Exercise[] | undefined> {
  try {
    const filteredInjuryExercise = await db('exercises')
      .select()
      .join('injuries', 'exercises.injury_id', 'injuries.id')
      .where('injuries.category', injuryCategory)
    return filteredInjuryExercise
  } catch (error) {
    console.error('error filtering exercises', error)
  }
}
