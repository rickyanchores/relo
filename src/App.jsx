import { useState } from 'react'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './pages/Footer/Footer'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Testimonial from './components/Testimonial/Testimonial'
import Banner from './components/Banner/Banner'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
