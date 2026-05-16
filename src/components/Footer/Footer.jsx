import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    const location = useLocation()
    const homePrefix = location.pathname === '/' ? '' : '/'

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const mobile = () => {
        // hide my number
    }

    const quickLinks = [
        { label: 'About Us', href: `${homePrefix}#about` },
        { label: 'Our Team', href: '/team', isRoute: true },
        { label: 'Events', href: `${homePrefix}#events` },
        { label: 'Join IHRC', href: `${homePrefix}#join` },
        { label: 'Contact Us', href: `${homePrefix}#contact` }
    ]

    const resources = [
        { label: 'HR Templates', href: '#' },
        { label: 'Blog & Articles', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Webinars', href: '#' },
        { label: 'Newsletter', href: '#' }
    ]

    const socials = [
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/ihrc-indore-hr-circle-community/', label: 'LinkedIn' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/indorehrcircle?igsh=MXRhbzB0cmo2enkxbw==', label: 'Instagram' },
        { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' }
    ]

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand Column */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <span>IHRC</span>
                            </div>
                            <div className="footer__logo-text">
                                <span className="footer__brand-name">Indore HR Circle</span>
                                <span className="footer__brand-tagline">Connect • Learn • Grow</span>
                            </div>
                        </div>
                        <p className="footer__brand-desc">
                            Building Central India's Strongest HR Community.
                            Empowering HR professionals through knowledge, connections, and growth opportunities.
                        </p>
                        <div className="footer__socials">
                            {socials.map((social, index) => (
                                <a
                                    href={social.href}
                                    className="footer__social"
                                    key={index}
                                    aria-label={social.label}
                                    id={`footer-social-${social.label.toLowerCase()}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    
                    <div className="footer__column">
                            <h4 className="footer__column-title">Quick Links</h4>
                        <ul className="footer__links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    {link.isRoute ? (
                                        <Link to={link.href} className="footer__link">{link.label}</Link>
                                    ) : (
                                        <a href={link.href} className="footer__link">{link.label}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer__column">
                        <h4 className="footer__column-title">Resources</h4>
                        <ul className="footer__links">
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="footer__link">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__column">
                        <h4 className="footer__column-title">Get in Touch</h4>
                        <div className="footer__contact-items">
                            <div className="footer__contact-item">
                                <FiMail className="footer__contact-icon" />
                                <span style={{fontWeight:"600px"}}>indorehrcircle@gmail.com</span>
                            </div>
                            {/* <div className="footer__contact-item">
                                <FiPhone className="footer__contact-icon" />
                                <span>+91 99269 80076</span>
                            </div> */}
                            <div className="footer__contact-item">
                                <FiMapPin className="footer__contact-icon" />
                                <span style={{textTransform:"uppercase"}}>Indore, madhya pradesh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2026 Indore HR Circle. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#" className="footer__bottom-link">Privacy Policy</a>
                        <a href="#" className="footer__bottom-link">Terms of Service</a>
                    </div>
                    <button
                        className="footer__back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        id="back-to-top-btn"
                    >

                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
