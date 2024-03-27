import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await db.getAllExercises()
    res.json(exercises)
  } catch (error) {
    console.error('Error on getting all exercises', error)
    res.sendStatus(500).send('Something went wrong on getting all exercises')
  }
})

//GET exercise by id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const exerciseId = await db.getExerciseById(id)
    res.json(exerciseId)
  } catch (error) {
    console.error('Error on getting all exercises', error)
    res.sendStatus(500).send('Something went wrong on getting all exercises')
  }
})

//GET exercises by category
router.get('/:category', async (req, res) => {
  try {
    const category = String(req.params.category)
    const exerciseCat = await db.filterExercisesByCategory(category)
    res.json(exerciseCat)
  } catch (error) {
    console.error('Error on getting all exercises', error)
    res.sendStatus(500).send('Something went wrong on getting all exercises')
  }
})

//GET exercises by injury
router.get('/:injury', async (req, res) => {
  try {
    const injury = String(req.params.injury)
    const exerciseInjury = await db.filterExercisesByInjury(injury)
    res.json(exerciseInjury)
  } catch (error) {
    console.error('Error on getting all exercises', error)
    res.sendStatus(500).send('Something went wrong on getting all exercises')
  }
})

export default router
