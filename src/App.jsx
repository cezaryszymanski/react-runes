import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(1)

  const thousands = Math.floor(number / 1000)
  const hundreds = Math.floor((number % 1000) / 100)
  const tens = Math.floor((number % 100) / 10)
  const units = number % 10

  const getRune = ({ number, xStart, yStart, xMultiplier, yMultiplier }) => {
    
    switch (number) {
      case 1:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
      case 2:
        return <line x1={xMultiplier * xStart} y1={yStart + 50} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
      case 3:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
      case 4:
        return <line x1={xMultiplier * xStart} y1={yStart + 50} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
      case 5:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
          <line x1={xMultiplier * xStart} y1={yStart + 50} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
        </>
      case 6:
        return <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
      case 7:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
        </>
      case 8:
        return <>
          <line x1={xMultiplier * xStart} y1={yStart + 50} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
        </>
      case 9:
        return <>
          <line x1={xMultiplier * xStart} y1={yStart + 50} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yStart + 50} stroke="white"/>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
        </>
    }
  }

  return (
    <>
      <h1>Runes Translator</h1>
      <div>
        <input 
          onChange={(e) => {
            if (e.target.value > 1 && e.target.value < 9999) {
              setNumber(e.target.value)
            }
          }}
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
            <svg width="201" height="201" viewBox="-101 -101 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="-101" x2="0" y2="100" stroke="white"/>
              {getRune({ number: units, xStart: 0, yStart: -100, xMultiplier: 1, yMultiplier: 1 })}
              {getRune({ number: tens, xStart: 0, yStart: -100, xMultiplier: -1, yMultiplier: 1 })}
              {getRune({ number: hundreds, xStart: 0, yStart: 100, xMultiplier: 1, yMultiplier: 1 })}              
            </svg>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
