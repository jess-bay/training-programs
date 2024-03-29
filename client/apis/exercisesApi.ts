import request from 'superagent'
import { Exercise, ExerciseData } from '../../models/exercise.ts'

const urlPath = '/api/v1/exercises'

export async function getExercises() {
  const res = await request.get(urlPath)
  return res.body
}

export async function addExercise(exercise: ExerciseData) {
  try {
    const res = await request.post(urlPath).send(exercise)
    return res.body
  } catch (error) {
    console.error('API client side add exercise: ', error)
    throw error
  }
}
