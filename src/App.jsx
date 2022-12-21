import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("react app running - consoled")

  return (
    <div className="App">
      <div>
        Hi, This is react sample app for test
        Workflow Added init - build added
      </div>
    </div>
  )
}

export default App
