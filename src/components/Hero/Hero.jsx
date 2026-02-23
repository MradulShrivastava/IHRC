import React, { useEffect, useRef } from 'react'
import { FiArrowRight, FiUsers, FiCalendar, FiAward } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero--visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (heroRef.current) observer.observe(heroRef.current)
        return () => observer.disconnect()
    }, [])

    const stats = [
        { icon: <FiUsers />, value: '500+', label: 'HR Professionals' },
        { icon: <FiCalendar />, value: '50+', label: 'Events Hosted' },
        { icon: <FiAward />, value: '10+', label: 'Years of Impact' },
    ]

    return (
        <section className="hero" ref={heroRef} id="home">
            {/* Background elements */}
            <div className="hero__bg">
                <div className="hero__bg-orb hero__bg-orb--1"></div>
                <div className="hero__bg-orb hero__bg-orb--2"></div>
                <div className="hero__bg-orb hero__bg-orb--3"></div>
                <div className="hero__bg-grid"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Indore's Premier HR Network
                    </div>

                    <h1 className="hero__title">
                        Welcome to{' '}
                        <span className="hero__title-highlight">Indore HR Circle</span>
                        <br />
                        Where HR Professionals Connect, Learn, and Grow Together.
                    </h1>

                    <div className="hero__divider">
                        <div className="hero__divider-line hero__divider-line--purple"></div>
                        <div className="hero__divider-line hero__divider-line--gold"></div>
                        <div className="hero__divider-line hero__divider-line--teal"></div>
                    </div>

                    <p className="hero__subtitle">
                        Join Indore's most vibrant community of HR leaders, practitioners, and enthusiasts.
                        Build meaningful connections, share insights, and shape the future of people management.
                    </p>

                    <div className="hero__actions">
                        <a href="#join" className="hero__btn hero__btn--primary" id="hero-join-btn">
                            Join IHRC Today
                            <FiArrowRight className="hero__btn-icon" />
                        </a>
                        <a href="#about" className="hero__btn hero__btn--secondary" id="hero-learn-btn">
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero__stats">
                        {stats.map((stat, index) => (
                            <div className="hero__stat" key={index}>
                                <div className="hero__stat-icon">{stat.icon}</div>
                                <div className="hero__stat-info">
                                    <span className="hero__stat-value">{stat.value}</span>
                                    <span className="hero__stat-label">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="hero__visual">
                    <div className="hero__visual-grid">
                        <div className="hero__visual-card hero__visual-card--1">
                            <div className="hero__visual-card-inner">
                                <FiUsers size={32} />
                                <span>Networking</span>
                            </div>
                        </div>
                        <div className="hero__visual-card hero__visual-card--2">
                            <div className="hero__visual-card-inner">
                                <FiCalendar size={32} />
                                <span>Events</span>
                            </div>
                        </div>
                        <div className="hero__visual-card hero__visual-card--3">
                            <div className="hero__visual-card-inner">
                                <FiAward size={32} />
                                <span>Growth</span>
                            </div>
                        </div>
                        <div className="hero__visual-center">
                            <div className="hero__visual-logo">
                                <span>IHRC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
