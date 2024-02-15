import { useState } from 'react'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './pages/Footer/Footer'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
