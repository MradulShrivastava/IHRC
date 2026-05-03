import React, { useEffect, useRef } from 'react'
import './ValueCards.css'

const ValueCards = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('values--visible')
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const values = [
        {
            color: 'purple',
            heading: "Indore's most authentic and supportive HR community.",
            body: "Join thousands of passionate professionals sharing real experiences, practical tools, and meaningful conversations that strengthen HR practices across Indore."
        },
        {
            color: 'gold',
            heading: "At IHRC/indore hr circle, you'll find knowledge, yes — but you will also find connection, understanding, and friendship.",
            body: "You'll meet CEO's / CFO's & HR professionals from across M.P who share your challenges, your wins, and your passion for making workplaces better."
        },
        {
            color: 'pink',
            heading: "HR is more than policies, compliance, and checklists — it's about people.",
            body: "This isn't just another platform. It's a home for HR hearts — where you belong, where you grow, and where you'll never walk alone."
        }
    ]

    return (
        <section className="values section" ref={sectionRef}>
            <div className="container">
                <div className="values__grid">
                    {values.map((value, index) => (
                        <div className={`values__card values__card--${value.color}`} key={index}>
                            <div className="values__card-content">
                                <h3 className="values__card-heading">{value.heading}</h3>
                                <p className="values__card-body">{value.body}</p>
                            </div>
                            <div className="values__card-number">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="values__cta">
                    <a href="#events" className="values__cta-btn" id="values-calendar-btn">
                        View Calendar
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ValueCards
