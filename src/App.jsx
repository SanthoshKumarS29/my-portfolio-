
import './App.css'
import { Route,Routes} from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/edu' element={<Educations />} />
      <Route path='/prj' element={<Projects />} />
      <Route path='/con' element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
