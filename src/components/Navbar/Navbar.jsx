import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'
import logo from "../../Assets/Images/ihrclogo.jpeg"
import { JOIN_FORM_LINK_PROPS } from '../../constants/links'

const Navbar = () => {
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    const homePrefix = location.pathname === '/' ? '' : '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'About Us', href: `${homePrefix}#about` },
        { label: 'Our Team', href: '/team', isRoute: true },
        {
            label: 'Connect',
            hasDropdown: true,
            items: ['Discussion Forums', 'Local Chapters', 'Industry Groups', 'LinkedIn Group']
        },

        { label: 'Events', href: `${homePrefix}#events` },
        { label: 'Contact', href: `${homePrefix}#contact` }
    ]

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__container container">
                {/* Logo */}
                <Link to="/" className="navbar__logo" onClick={() => setIsMobileOpen(false)}>
                    <img height={95} width={95} src={logo} alt="" />
                    <div className="navbar__logo-text">
                        <span className="navbar__brand-name">Indore HR Circle</span>
                        <span className="navbar__brand-tagline">Connect • Learn • Grow</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link, index) => (
                        <div
                            className="navbar__link-wrapper"
                            key={index}
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            {link.isRoute ? (
                                <Link
                                    to={link.href}
                                    className="navbar__link"
                                    onClick={() => {
                                        setIsMobileOpen(false)
                                        setActiveDropdown(null)
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    href={link.href || '#'}
                                    className="navbar__link"
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault()
                                            handleDropdownToggle(index)
                                        } else {
                                            setIsMobileOpen(false)
                                            setActiveDropdown(null)
                                        }
                                    }}
                                >
                                    {link.label}
                                    {link.hasDropdown && <FiChevronDown className="navbar__link-icon" />}
                                </a>
                            )}
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

                    <a {...JOIN_FORM_LINK_PROPS} className="navbar__cta-mobile">Join Now</a>
                </div>

                {/* CTA Button */}
                <a {...JOIN_FORM_LINK_PROPS} className="navbar__cta">
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
