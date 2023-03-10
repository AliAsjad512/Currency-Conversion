import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './navbar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Nav/>
    </div>
  )
}

export default App
