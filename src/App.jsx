import React from 'react'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import './app.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Works from './components/works/Works'



function App() {
  
  return (
      <div>
        <header>
          <NavBar />
        </header>
        <Home />
        <Works />
        <Skills />
        <About />
      </div>
  )
}

export default App
