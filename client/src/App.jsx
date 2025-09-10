import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Service Pages
import HouseCleaning from './pages/HouseCleaning'
import ApartmentCleaning from './pages/ApartmentCleaning'
import OfficeCleaning from './pages/OfficeCleaning'
import MoveInCleaning from './pages/MoveInCleaning'
import MoveOutCleaning from './pages/MoveOutCleaning'
import PostConstructionCleaning from './pages/PostConstructionCleaning'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Cleaning Services</h1>
          <p>Professional cleaning solutions for homes and businesses in New Jersey</p>
        </div>
      </div>
      <Services detailed={true} />
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>About New Jersey Cleaning Services</h1>
          <p>Your trusted cleaning partner since day one</p>
        </div>
      </div>
      <About detailed={true} />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a free estimate</p>
        </div>
      </div>
      <Contact detailed={true} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/house-cleaning" element={<HouseCleaning />} />
            <Route path="/apartment-cleaning" element={<ApartmentCleaning />} />
            <Route path="/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/move-in-cleaning" element={<MoveInCleaning />} />
            <Route path="/move-out-cleaning" element={<MoveOutCleaning />} />
            <Route path="/post-construction-cleaning" element={<PostConstructionCleaning />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
