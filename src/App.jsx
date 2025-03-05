import {useState} from "react"
import './App.css'

function App() {
    let [color,setColor]=useState('white')
const changeRed  =()=>{
  setColor(color='red')
}
const changeWhite =()=>{
  setColor(color='white')
}
const changeBlue=()=>{
  setColor(color='blue')
}
  return (
    <div  className="wall" style={{backgroundColor: color}} >
      <div >
      <button onClick={changeRed} >Red</button>
    <button onClick={changeWhite}>White</button>
    <button onClick={changeBlue}>blue</button>
      </div>
   

    </div>
  )
}

export default App
 