import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function add(){
      setCount(count+1)
  }

  return (
    <div>
   <div>
<h1> {count}</h1>
<button onClick={add}>Adicionar</button>
   </div>
  </div>
  )
}

export default App
