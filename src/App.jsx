import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Config from './Pages/Config/Config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Config />
    </div>
  )
}

export default App