import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const [number, setNumber] = useState(1)

  const thousands = Math.floor(number / 1000)
  const hundreds = Math.floor((number % 1000) / 100)
  const tens = Math.floor((number % 100) / 10)
  const units = number % 10

  const getRune = ({ number, xMultiplier, yMultiplier }) => {
    const xStart = 0
    const yStart = -100
    
    switch (number) {
      case 1:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
      case 2:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * (yStart + 50)} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
      case 3:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
      case 4:
        return <line x1={xMultiplier * xStart} y1={yMultiplier * (yStart + 50)} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
      case 5:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
          <line x1={xMultiplier * xStart} y1={yMultiplier * (yStart + 50)} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
        </>
      case 6:
        return <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
      case 7:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
        </>
      case 8:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * (yStart + 50)} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
        </>
      case 9:
        return <>
          <line x1={xMultiplier * xStart} y1={yMultiplier * (yStart + 50)} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
          <line x1={xMultiplier * (xStart + 100)} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * (yStart + 50)} stroke="white"/>
          <line x1={xMultiplier * xStart} y1={yMultiplier * yStart} x2={xMultiplier * (xStart + 100)} y2={yMultiplier * yStart} stroke="white"/>
        </>
    }
  }

  const svgRef = useRef();

  const downloadSvg = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);

    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "image.svg";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <h1>Runes Translator</h1>
      <div>
        <input 
          onChange={(e) => {
            if (e.target.value <= 9999) {
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
            <div className='rune-container'>
              <svg ref={svgRef} width="201" height="201" viewBox="-101 -101 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="-101" x2="0" y2="100" stroke="white"/>
                {getRune({ number: units, xMultiplier: 1, yMultiplier: 1 })}
                {getRune({ number: tens, xMultiplier: -1, yMultiplier: 1 })}
                {getRune({ number: hundreds, xMultiplier: 1, yMultiplier: -1 })}
                {getRune({ number: thousands, xMultiplier: -1, yMultiplier: -1 })}         
              </svg>

              <button onClick={downloadSvg}>Download SVG</button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
