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
      <h3 className="text-lg font-bold mb-4">Your Workout Plan</h3>
      <div className="workout-list">
        {data?.map((exercise: Exercise) => (
          <div key={exercise.id}>
            <p className="mb-2">Name: {exercise.name}</p>
            <p className="mb-2">Reps: {exercise.reps}</p>
            <p className="mb-2">Sets: {exercise.sets}</p>
            <p className="mb-2">Description: {exercise.description}</p>
            <p className="mb-8">Category: {exercise.category}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          onChange={handleName}
          className="border border-gray-300 rounded-md py-1 px-3 mb-2"
          placeholder="What's it called?"
          value={newExercise}
          id="exerciseName"
          required
        />
        <label htmlFor="reps" className="block mb-2">
          Reps
        </label>
        <input
          onChange={handleReps}
          className="border border-gray-300 rounded-md py-1 px-3 mb-2"
          placeholder="How many in one go?"
          value={reps}
          id="reps"
          required
        />
        <label htmlFor="sets" className="block mb-2">
          Sets
        </label>
        <input
          onChange={handleSets}
          className="border border-gray-300 rounded-md py-1 px-3 mb-2"
          placeholder="How many cycles?"
          value={sets}
          id="sets"
          required
        />
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <input
          onChange={handleDescription}
          className="border border-gray-300 rounded-md py-1 px-3 mb-2 w-auto resize"
          placeholder="How do you do it?"
          value={description}
          id="description"
          required
        />
        <label htmlFor="category" className="block mb-2">
          Category
        </label>
        <input
          type="radio"
          name="category"
          value="lower"
          checked={category === ''}
          onChange={handleCategory}
          className="mr-2 mb-8"
          required
        />{' '}
        Lower Body
        <input
          type="radio"
          name="category"
          value="upper"
          checked={category === ''}
          onChange={handleCategory}
          className="mr-2 ml-4"
          required
        />{' '}
        Upper Body
        <input
          type="radio"
          name="category"
          value="full"
          checked={category === ''}
          onChange={handleCategory}
          className="mr-2 ml-4"
          required
        />
        Full Body
        <button
          type="submit"
          className="bg-maroon text-white py-2 px-4 mt-2 block"
        >
          Add To Your Workout!
        </button>
      </form>
    </>
  )
}
