import { CategorySelection } from './CategorySelection.tsx'
import { WorkoutPlan } from './WorkoutPlan.tsx'

function App() {
  return (
    <>
      <div className=" bg-maroon p-3">
        <h1 className="text-3xl font-bold text-center mt-5 mb-8 text-white">
          Exercise Engine
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 bg-pink-50 p-4 rounded-md">
            <CategorySelection />
          </div>
          <div className="w-full md:w-1/2 bg-pink-50 p-4 rounded-md">
            <WorkoutPlan />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
