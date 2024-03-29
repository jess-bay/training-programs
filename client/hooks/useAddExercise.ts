import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ExerciseData } from '../../models/exercise.ts'
import * as api from '../apis/exercisesApi.ts'

export function useCustomQueryClient() {
  const queryClient = useQueryClient()
  return queryClient
}

export function useAddExercise() {
  const queryClient = useCustomQueryClient()
  const addMutation = useMutation({
    mutationFn: (newExercise: ExerciseData) => api.addExercise(newExercise),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercises'] })
    },
  })
  return addMutation
}
