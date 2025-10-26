import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ContactUs from './pages/ContactUs'
import Ticket from './components/Ticket'
import AddTicket from './components/AddTicket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import ViewTicket from './pages/ViewTicket'

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
           <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-(--beige)/20"></div>
             <div className="absolute top-30 left-200 w-40 h-40 rounded-full bg-(--beige)/20"></div>
             <div className="absolute top-60 left-180 w-40 h-40 rounded-full bg-(--beige)/20"></div>
             <div className="absolute top-80 left-100 w-40 h-40 rounded-full bg-(--beige)/20"></div>
             <div className="absolute top-100 left-130 w-40 h-40 rounded-full bg-(--beige)/20"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/ticket/:id" element={<ViewTicket />} />

          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </Router>
  )
}

export default App
