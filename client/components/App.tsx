import { CategorySelection } from './CategorySelection.tsx'
import { WorkoutPlan } from './WorkoutPlan.tsx'

function App() {
  return (
    <>
      <div className="app">
        <h1>Exercise Engine</h1>
        <div className="category-selection-div">
          <CategorySelection />
        </div>
        <div className="workout-plan-div">
          <WorkoutPlan />
        </div>
      </div>
    </>
  )
}

export default App
