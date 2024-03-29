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
      <div>
        <form>
          <label htmlFor="Category">
            Select a Category (at least one required)
          </label>
          <br />
          <input
            type="checkbox"
            checked={lowerChecked}
            onChange={handleLowerChange}
          />{' '}
          Lower Body
          <br />
          <input
            type="checkbox"
            checked={upperChecked}
            onChange={handleUpperChange}
          />{' '}
          Upper Body
          <br />
          <input
            type="checkbox"
            checked={fullChecked}
            onChange={handleFullChange}
          />{' '}
          Full Body
          <br />
          <br />
          <label htmlFor="injury">
            Optional: Select an injury or condition
          </label>
          <br />
          <select>
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
          <button type="submit" disabled={!formValid}>
            Generate my Workout!
          </button>
        </form>
      </div>
    </>
  )
}
