import { useState } from 'react'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './pages/Footer/Footer'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Testimonial from './components/Testimonial/Testimonial'
import Banner from './components/Banner/Banner'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route component={Home}/>
        </Routes>  
        <Home />
        <About />
        <Gallery />
        <Banner />
        <Testimonial />
        <Footer />
      </Router>
    </div>
  )
}

export default App
