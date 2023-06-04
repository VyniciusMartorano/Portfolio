import React from 'react'
import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from './components/home/Home'
import './app.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar /> 
      </header>
        <Home />
        <About />
        <Contact />
    </BrowserRouter>
  )
}

export default App
