import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ComponentsPage from './Components/UIComponents'
import Home from './Components/Home'

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
        <Footer />
      </Router>

  )
}

export default App
