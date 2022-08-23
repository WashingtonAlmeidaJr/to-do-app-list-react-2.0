import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './global.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Tasks/>
    </div>
  )
}

export default App
