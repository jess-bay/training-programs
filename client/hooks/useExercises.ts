import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/exercisesApi'

export function useExercises() {
  const exQuery = useQuery({
    queryKey: ['exercises'],
    queryFn: () => api.getExercises(),
  })
  return {
    ...exQuery,
  }
}
