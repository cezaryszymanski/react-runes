import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(1)

  const thousands = Math.floor(number / 1000)
  const hundreds = Math.floor((number % 1000) / 100)
  const tens = Math.floor((number % 100) / 10)
  const units = number % 10

  const getRune = (number, xStart, yStart) => {
    
    switch (number) {
      case 1:
        return <line x1={xStart} y1={yStart} x2={xStart + 100} y2={yStart} stroke="white"/>
      case 2:
        return <line x1={xStart} y1={yStart + 50} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
      case 3:
        return <line x1={xStart} y1={yStart} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
      case 4:
        return <line x1={xStart} y1={yStart + 50} x2={xStart + 100} y2={yStart} stroke="white"/>
      case 5:
        return <>
          <line x1={xStart} y1={yStart} x2={xStart + 100} y2={yStart} stroke="white"/>
          <line x1={xStart} y1={yStart + 50} x2={xStart + 100} y2={yStart} stroke="white"/>
        </>
      case 6:
        return <line x1={xStart + 100} y1={yStart} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
      case 7:
        return <>
          <line x1={xStart} y1={yStart} x2={xStart + 100} y2={yStart} stroke="white"/>
          <line x1={xStart + 100} y1={yStart} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
        </>
      case 8:
        return <>
          <line x1={xStart} y1={yStart + 50} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
          <line x1={xStart + 100} y1={yStart} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
        </>
      case 9:
        return <>
          <line x1={xStart} y1={yStart + 50} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
          <line x1={xStart + 100} y1={yStart} x2={xStart + 100} y2={yStart + 50} stroke="white"/>
          <line x1={xStart} y1={yStart} x2={xStart + 100} y2={yStart} stroke="white"/>
        </>
    }
  }

  return (
    <>
      <h1>Runes Translator</h1>
      <div>
        <input 
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          type="number" placeholder="Enter your number" 
          min={1} 
          max={9999}
        />
        {
          number && (
            <div>
              <h2>Thousands: {thousands}</h2>
              <h2>Hundreds: {hundreds}</h2>
              <h2>Tens: {tens}</h2>
              <h2>Units: {units}</h2>
            <svg width="201" height="201" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="100" y1="0" x2="100" y2="201" stroke="white"/>
              {getRune(units, 100, 1)}
              {getRune(tens, 0, 1)}
            </svg>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
