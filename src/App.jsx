import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Config from './Pages/Config/Config'
import Register from './Pages/Register/Register'
import Result from './Pages/Result/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        {/* <Config/> */}
        <Register/>
        {/* <Dashboard /> */}
        {/* <Result/> */}
    </div>
  )
}

export default App
