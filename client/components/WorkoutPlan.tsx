import { useEffect, useState } from 'react'
import { Exercise, ExerciseData } from '../../models/exercise'
import { useAddExercise } from '../hooks/useAddExercise'
import { useExercises } from '../hooks/useExercises'

export function WorkoutPlan() {
  const { data } = useExercises()
  const addMutation = useAddExercise()

  const [newExercise, setNewExercise] = useState('')
  const [reps, setReps] = useState('')
  const [sets, setSets] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<string | null>('')
  const [formValid, setFormValid] = useState(false)

  // useEffect(() => {
  //   setFormValid(category || upperChecked || fullChecked)
  // }, [lowerChecked, upperChecked, fullChecked])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExercise(event.target.value)
  }
  const handleReps = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReps(event.target.value)
  }
  const handleSets = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSets(event.target.value)
  }
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value === category ? null : event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (category === null) {
      return
    }
    const exercise = {
      name: newExercise,
      reps: reps,
      sets: sets,
      description: description,
      category: category,
    }
    addMutation.mutate(exercise)
    setNewExercise('')
    setReps('')
    setSets('')
    setDescription('')
    setCategory(null)
  }

  return (
    <>
      <h3>Your Workout Plan</h3>
      <div className="workout-list">
        {data?.map((exercise: Exercise) => (
          <div key={exercise.id}>
            <p>Name: {exercise.name}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Sets: {exercise.sets}</p>
            <p>Description: {exercise.description}</p>
            <p>Category: {exercise.category}</p>
            <br />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleName}
          className="new-exercise"
          placeholder="Exercise Name"
          value={newExercise}
          id="exerciseName"
          required
        />
        <br />
        <label htmlFor="reps">Reps</label>
        <input
          onChange={handleReps}
          className="new-reps"
          placeholder="How many will you do per set?"
          value={reps}
          id="reps"
          required
        />
        <br />
        <label htmlFor="sets">Sets</label>
        <input
          onChange={handleSets}
          className="new-sets"
          placeholder="How many times will you run through this exercise?"
          value={sets}
          id="sets"
          required
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          onChange={handleDescription}
          className="new-description"
          placeholder="How do you do it?"
          value={description}
          id="description"
          required
        />
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="radio"
          name="category"
          value="lower"
          checked={category === ''}
          onChange={handleCategory}
          required
        />{' '}
        Lower Body
        <input
          type="radio"
          name="category"
          value="upper"
          checked={category === ''}
          onChange={handleCategory}
          required
        />{' '}
        Upper Body
        <input
          type="radio"
          name="category"
          value="full"
          checked={category === ''}
          onChange={handleCategory}
          required
        />
        Full Body
        <br />
        <button type="submit">Add To Your Workout!</button>
      </form>
    </>
  )
}
