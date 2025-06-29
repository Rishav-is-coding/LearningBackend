import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [test, setTests] = useState([])

  useEffect(() => {
    axios.get('/api/tests')
      .then((response) => {
        setTests(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Chai or Fullstack</h1>
      <p>JOKES : {test.length}</p>

      {
        test.map((test, index) => (
          <div key={test.id}>
            <h3>{test.title}</h3>
            <p>{test.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
