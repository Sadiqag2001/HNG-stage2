import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Home(){
  return(
    <>
      <Hero />
    </>
  )

}

function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <NavBar />
        <main className='grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
