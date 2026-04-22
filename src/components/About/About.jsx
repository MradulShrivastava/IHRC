import React, { useEffect, useRef } from 'react'
import { FiTarget, FiHeart, FiGlobe, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './About.css'
import founderImage from "/images/RamanShukla.jpg"

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about--visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const pillars = [
        {
            icon: <FiTarget />,
            title: 'Our Mission',
            description: 'To empower HR professionals in Indore by creating a collaborative platform for knowledge sharing, networking, and professional development.'
        },
        {
            icon: <FiHeart />,
            title: 'Our Values',
            description: 'We believe in authenticity, continuous learning, mutual respect, and building a supportive community where every HR professional can thrive.'
        },
        {
            icon: <FiGlobe />,
            title: 'Our Vision',
            description: 'To make Indore a hub of HR excellence by fostering innovation, best practices, and meaningful connections across industries.'
        }
    ]

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                {/* Section Header */}
                <div className="about__header">
                    <span className="about__label">About IHRC</span>
                    <h2 className="section-title">
                        Building Central India's Strongest{' '}
                        <span className="gradient-text">HR Community</span>
                    </h2>
                    <p className="section-subtitle">
                        Indore HR Circle is more than a network — it's a movement to elevate HR practices,
                        nurture talent, and create lasting professional relationships.
                    </p>
                </div>

                {/* Founder Section */}
                <div className="about__founder">
                    <div className="about__founder-image-wrapper">
                        <div className="about__founder-image-frame">
                            <img
                                src={founderImage}
                                alt="Founder of Indore HR Circle"
                                className="about__founder-image"
                            />
                        </div>
                        <div className="about__founder-accent about__founder-accent--1"></div>
                        <div className="about__founder-accent about__founder-accent--2"></div>
                    </div>

                    <div className="about__founder-content">
                        <span className="about__founder-tag">Founder & Visionary</span>
                        <h3 className="about__founder-name">Raman Shukla</h3>
                        <p className="about__founder-role">Founder, Indore HR Circle</p>

                        <div className="about__founder-divider">
                            <div className="about__founder-divider-line"></div>
                        </div>

                        <p className="about__founder-bio">
                            With a deep passion for building meaningful HR communities, Raman Shukla
                            founded Indore HR Circle to bridge the gap between HR professionals in the city.
                            His vision was simple yet powerful — create a space where HR leaders can openly
                            share experiences, learn from each other, and grow together.
                        </p>
                        <p className="about__founder-bio">
                            Under his leadership, IHRC has grown from a small group of HR enthusiasts into
                            Indore's most vibrant and recognized HR community, hosting impactful events,
                            workshops, and networking sessions that have touched hundreds of careers.
                        </p>

                        <blockquote className="about__founder-quote">
                            <span className="about__founder-quote-mark">"</span>
                            HR is not just a department — it's the heartbeat of every organization.
                            When HR professionals unite, workplaces transform.
                        </blockquote>

                        <div className="about__founder-socials">
                            <a href="#" className="about__founder-social" aria-label="LinkedIn" id="founder-linkedin">
                                <FiLinkedin />
                            </a>
                            <a href="#" className="about__founder-social" aria-label="Twitter" id="founder-twitter">
                                <FiTwitter />
                            </a>
                            <a href="#" className="about__founder-social" aria-label="Email" id="founder-email">
                                <FiMail />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Pillars */}
                <div className="about__pillars">
                    {pillars.map((pillar, index) => (
                        <div className="about__pillar" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="about__pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3 className="about__pillar-title">{pillar.title}</h3>
                            <p className="about__pillar-desc">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                {/* Why IHRC Highlight */}
                <div className="about__highlight">
                    <div className="about__highlight-content">
                        <h3 className="about__highlight-title">Why Indore HR Circle?</h3>
                        <p className="about__highlight-text">
                            In the heart of Central India, Indore is a rapidly growing business hub.
                            As companies scale, the need for strong HR leadership has never been greater.
                            IHRC brings together the sharpest HR minds under one roof — creating opportunities
                            for collaboration, mentorship, and collective growth that you won't find anywhere else.
                        </p>
                        <div className="about__highlight-features">
                            <div className="about__highlight-feature">
                                <span className="about__highlight-check">✓</span>
                                Local industry insights
                            </div>
                            <div className="about__highlight-feature">
                                <span className="about__highlight-check">✓</span>
                                Expert-led workshops
                            </div>
                            <div className="about__highlight-feature">
                                <span className="about__highlight-check">✓</span>
                                Peer mentorship programs
                            </div>
                            <div className="about__highlight-feature">
                                <span className="about__highlight-check">✓</span>
                                Annual HR summit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
