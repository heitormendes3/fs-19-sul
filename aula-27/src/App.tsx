import {  useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


  return (
    <>
      <div className=''>
      <div>
        
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/615px-Cear%C3%A1_Sporting_Club_logo.svg.png" className="logo" alt="time1" />     
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/180px-Fortaleza_EC_2018.png" className="logo react" alt="time2" />
      </div>
      <h1> CEA x FOR</h1>
      <h1>{count}   X   {count2}</h1>
      <div className="Button1">
        <button onClick={() => setCount((count) => count + 1)}>
          Gol Vozão 
        </button>
        <button onClick={() => {
              if (count > 0) {
                setCount(count - 1)
              }         
            }} className="decremento bg-red-600">-</button>
        
        <button onClick={() => setCount2((count2) => count2 + 1)}>
        Gol Chupa Manga 
        </button>
        <button onClick={() => {
              if (count2 > 0) {
                setCount2(count2 - 1)
              }         
            }} className="decremento bg-red-600">-</button>
      </div>
      </div>
            
    </>
  )
}

export default App
