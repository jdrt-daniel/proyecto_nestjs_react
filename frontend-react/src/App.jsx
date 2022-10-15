import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './views/Home'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <h1 className='text-danger'>Hola mundo</h1>
        <Home />
    </div>
  )
}

export default App
