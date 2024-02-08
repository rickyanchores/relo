import { useState } from 'react'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App
