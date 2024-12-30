import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> SLAM  BOOK</h1>
      <Form/> 
    </>
  )
}


export default App
