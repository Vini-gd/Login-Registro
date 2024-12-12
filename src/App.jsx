import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Email from './components/log/email'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Entre com sua conta na Descomplica.</h1>
      <Email></Email>
    </>
  )
}

export default App
