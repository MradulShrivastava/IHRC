import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ValueCards from './components/ValueCards/ValueCards'
import Benefits from './components/Benefits/Benefits'
import Events from './components/Events/Events'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <ValueCards />
            <Benefits />
            <Events />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
