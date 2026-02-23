import React, { useEffect, useRef } from 'react'
import { FiBookOpen, FiUsers, FiTrendingUp, FiAward, FiMic, FiBriefcase } from 'react-icons/fi'
import './Benefits.css'

const Benefits = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('benefits--visible')
                    }
                })
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const benefits = [
        {
            icon: <FiUsers />,
            title: 'Networking Events',
            description: 'Connect with HR professionals from diverse industries in Indore through regular meetups, mixers, and structured networking sessions.',
            color: '#6B21A8'
        },
        {
            icon: <FiBookOpen />,
            title: 'Knowledge Workshops',
            description: 'Attend expert-led workshops on latest HR trends, labor laws, compensation strategies, talent acquisition, and more.',
            color: '#EC4899'
        },
        {
            icon: <FiTrendingUp />,
            title: 'Career Growth',
            description: 'Access exclusive job listings, career mentorship, and professional development programs designed for HR practitioners.',
            color: '#14B8A6'
        },
        {
            icon: <FiAward />,
            title: 'HR Awards',
            description: 'Get recognized for your contributions through our annual Indore HR Excellence Awards celebrating outstanding achievements.',
            color: '#F59E0B'
        },
        {
            icon: <FiMic />,
            title: 'Speaker Series',
            description: 'Learn from top industry leaders, CHROs, and people management experts through our curated speaker sessions.',
            color: '#3B82F6'
        },
        {
            icon: <FiBriefcase />,
            title: 'Resource Library',
            description: 'Access a growing collection of templates, guides, case studies, and best practice documents for everyday HR challenges.',
            color: '#EF4444'
        }
    ]

    return (
        <section className="benefits section" id="benefits" ref={sectionRef}>
            <div className="container">
                <span className="benefits__label">Member Benefits</span>
                <h2 className="section-title">
                    Everything You Need to{' '}
                    <span className="gradient-text">Excel in HR</span>
                </h2>
                <p className="section-subtitle">
                    From exclusive workshops to powerful networking opportunities,
                    IHRC membership unlocks your full potential as an HR professional.
                </p>

                <div className="benefits__grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefits__card" key={index}>
                            <div
                                className="benefits__card-icon"
                                style={{ '--card-color': benefit.color }}
                            >
                                {benefit.icon}
                            </div>
                            <h3 className="benefits__card-title">{benefit.title}</h3>
                            <p className="benefits__card-desc">{benefit.description}</p>
                            <div className="benefits__card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
