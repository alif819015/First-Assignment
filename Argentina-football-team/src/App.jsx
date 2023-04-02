import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TeamInfo from './Components/TeamInfo/TeamInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
     <TeamInfo></TeamInfo>
    </div>
  )
}

export default App
