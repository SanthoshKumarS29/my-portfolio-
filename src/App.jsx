
import './App.css'
import { Router, Route, Switch } from "react-router-dom"
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
      <Router>
        <Navbar />
        <Route path='/' element={<Home />} />
        <Switch>
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/edu' element={<Educations />} />
          <Route path='/prj' element={<Projects />} />
          <Route path='/con' element={<Contact />} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
