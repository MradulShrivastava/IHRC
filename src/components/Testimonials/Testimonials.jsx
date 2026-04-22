import React, { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import './Testimonials.css'

const Testimonials = () => {
    const [active, setActive] = useState(0)
    const sectionRef = useRef(null)

    const testimonials = [
        {
            name: 'Mradul Shrivastava',
            role: 'Software Developer',
            text: 'IHRC has been a game-changer for my career. The connections I\'ve made and the knowledge I\'ve gained have been invaluable. The community feels like a family!',
            rating: 5
        },
        {
            name: 'Raman Shukla',
            role: 'CEO , IHRC',
            text: 'The caliber of events and workshops organized by Indore HR Circle is exceptional. Every session adds real value and the networking opportunities are unmatched.',
            rating: 5
        },
        {
            name: 'Sunny Shukla',
            role: 'HR Manager',
            text: 'As someone new to Indore, IHRC helped me build my professional network from scratch. The warmth and support from fellow members is truly remarkable.',
            rating: 5
        },
        {
            name: 'Rishika Sharma',
            role: 'HR Manager',
            text: 'The mentorship program at IHRC connected me with incredible senior leaders who guided my career transition. Forever grateful for this community!',
            rating: 5
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('testimonials--visible')
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length)
    const prevSlide = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="testimonials section" ref={sectionRef}>
            <div className="container">
                <span className="testimonials__label">Testimonials</span>
                <h2 className="section-title">
                    What Our Members{' '}
                    <span className="gradient-text">Say About Us</span>
                </h2>
                <p className="section-subtitle">
                    Real stories from real HR professionals who found their tribe at IHRC.
                </p>

                <div className="testimonials__slider">
                    <div className="testimonials__slides">
                        {testimonials.map((t, index) => (
                            <div
                                className={`testimonials__slide ${index === active ? 'testimonials__slide--active' : ''}`}
                                key={index}
                            >
                                <div className="testimonials__quote">"</div>
                                <p className="testimonials__text">{t.text}</p>
                                <div className="testimonials__stars">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <FiStar key={i} className="testimonials__star" />
                                    ))}
                                </div>
                                <div className="testimonials__author">
                                    <div className="testimonials__avatar">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="testimonials__author-info">
                                        <span className="testimonials__name">{t.name}</span>
                                        <span className="testimonials__role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials__controls">
                        <button className="testimonials__arrow" onClick={prevSlide} aria-label="Previous" id="testimonial-prev">
                            <FiChevronLeft />
                        </button>
                        <div className="testimonials__dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonials__dot ${index === active ? 'testimonials__dot--active' : ''}`}
                                    onClick={() => setActive(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    id={`testimonial-dot-${index}`}
                                />
                            ))}
                        </div>
                        <button className="testimonials__arrow" onClick={nextSlide} aria-label="Next" id="testimonial-next">
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
