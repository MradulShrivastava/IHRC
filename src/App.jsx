import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ValueCards from './components/ValueCards/ValueCards'
import Events from './components/Events/Events'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import TeamPage from './pages/TeamPage/TeamPage'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <ValueCards />
            <Events />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    )
}

const ScrollToTop = () => {
    const location = useLocation()

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [location.pathname])

    return null
}

function App() {
    return (
        <div className="app">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>
        </div>
    )
}

export default App
