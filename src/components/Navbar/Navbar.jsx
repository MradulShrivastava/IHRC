import React, { useState, useEffect } from 'react'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        {
            label: 'Member Benefits',
            hasDropdown: true,
            items: ['Networking Events', 'Workshops', 'Resources Library', 'Mentorship Program']
        },
        {
            label: 'Connect',
            hasDropdown: true,
            items: ['Discussion Forums', 'Local Chapters', 'Industry Groups', 'LinkedIn Group']
        },
        { label: 'About Us', href: '#about' },
        { label: 'Events', href: '#events' },
        { label: 'Contact', href: '#contact' }
    ]

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__container container">
                {/* Logo */}
                <a href="#" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <span className="navbar__logo-text-inner">IHRC</span>
                    </div>
                    <div className="navbar__logo-text">
                        <span className="navbar__brand-name">Indore HR Circle</span>
                        <span className="navbar__brand-tagline">Connect • Learn • Grow</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link, index) => (
                        <div
                            className="navbar__link-wrapper"
                            key={index}
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            <a
                                href={link.href || '#'}
                                className="navbar__link"
                                onClick={(e) => {
                                    if (link.hasDropdown) {
                                        e.preventDefault()
                                        handleDropdownToggle(index)
                                    } else {
                                        setIsMobileOpen(false)
                                    }
                                }}
                            >
                                {link.label}
                                {link.hasDropdown && <FiChevronDown className="navbar__link-icon" />}
                            </a>
                            {link.hasDropdown && activeDropdown === index && (
                                <div className="navbar__dropdown">
                                    {link.items.map((item, i) => (
                                        <a href="#" className="navbar__dropdown-item" key={i}>
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <a href="#join" className="navbar__cta-mobile">Join Now</a>
                </div>

                {/* CTA Button */}
                <a href="#join" className="navbar__cta">
                    Join Now
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar__toggle"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
