import { useEffect, useState } from 'react'

export function CategorySelection() {
  const [lowerChecked, setLowerChecked] = useState(false)
  const [upperChecked, setUpperChecked] = useState(false)
  const [fullChecked, setFullChecked] = useState(false)
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    setFormValid(lowerChecked || upperChecked || fullChecked)
  }, [lowerChecked, upperChecked, fullChecked])

  const handleLowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLowerChecked(event.target.checked)
  }

  const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpperChecked(event.target.checked)
  }

  const handleFullChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullChecked(event.target.checked)
  }

  return (
    <>
      <div className="mb-4">
        <form>
          <label htmlFor="Category" className="block mb-2">
            Select a Category (at least one required)
          </label>
          <br />
          <input
            type="checkbox"
            checked={lowerChecked}
            onChange={handleLowerChange}
            className="mr-2"
          />{' '}
          Lower Body
          <br />
          <input
            type="checkbox"
            checked={upperChecked}
            onChange={handleUpperChange}
            className="mr-2"
          />{' '}
          Upper Body
          <br />
          <input
            type="checkbox"
            checked={fullChecked}
            onChange={handleFullChange}
            className="mr-2"
          />{' '}
          Full Body
          <br />
          <br />
          <label htmlFor="injury" className="block mb-2">
            Optional: Select an injury or condition
          </label>
          <br />
          {/* Tailwind border options: sm, md, lg, xl, 2xl */}
          <select className="border border-gray-300 rounded-md py-1 px-3 mb-2">
            <option value="none">None</option>
            <option value="shoulder">Shoulder</option>
            <option value="knee">Knee</option>
            <option value="back">Back</option>
            <option value="ankle">Ankle</option>
            <option value="wrist">Wrist</option>
            <option value="neck">Neck</option>
            <option value="respiratory">Respiration</option>
            <option value="highbp">High Blood Pressure</option>
            <option value="lowbp">Low Blood Pressure</option>
          </select>
          <br />
          <br />
          <button
            type="submit"
            className={` bg-maroon text-white py-2 px-4 ${formValid ? '' : 'opacity-50 cursor-not-allowed'}`}
          >
            Generate my Workout!
          </button>
        </form>
      </div>
    </>
  )
}
