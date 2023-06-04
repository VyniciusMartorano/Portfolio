import React from 'react'
import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from './components/home/Home'
import './app.css'
import About from './components/about/About'

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar /> 
      </header>
        <Home />
        <About />
      {/* <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/about'} element={<div>about</div>} />
        <Route path={'/skills'} element={<div>about</div>} />
        <Route path={'/contact'} element={<div>about</div>} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
