import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar } from 'react-icons/fi'
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

    const members = [
        {
            name: 'Raman Shukla',
            role: 'Founder & Visionary',
            description: 'The driving force behind IHRC, shaping a people-first community where HR leaders connect with purpose and confidence.',
            image: '/images/RamanShukla.jpg',
            accent: 'purple'
        },
        {
            name: 'Leadership Team',
            role: 'Community Relations',
            description: 'Focused on warm member engagement, trusted partnerships, and making every new connection inside IHRC feel meaningful.',
            image: '/images/team-member-1.jpeg',
            accent: 'pink'
        },
        {
            name: 'Leadership Team',
            role: 'Programs & Events',
            description: 'Curating thoughtful experiences, workshops, and conversations that help the Indore HR community keep learning together.',
            image: '/images/team-member-2.jpeg',
            accent: 'gold'
        },
        {
            name: 'Leadership Team',
            role: 'Member Experience',
            description: 'Bringing energy, care, and thoughtful coordination so members feel supported across every IHRC initiative.',
            image: '/images/team-member-3.jpeg',
            accent: 'teal'
        }
    ]

    return (
        <section className="benefits section" id="team" ref={sectionRef}>
            <div className="container">
                <span className="benefits__label">Our Team</span>
                <h2 className="section-title">
                    Meet the People Behind{' '}
                    <span className="gradient-text">IHRC</span>
                </h2>
                <p className="section-subtitle">
                    A passionate team building authentic connections, impactful events,
                    and a stronger HR community for Indore and beyond.
                </p>

                <div className="benefits__grid">
                    {members.map((member, index) => (
                        <article className={`benefits__card benefits__card--${member.accent}`} key={index}>
                            <div className="benefits__card-image-wrap">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="benefits__card-image"
                                />
                                <div className="benefits__card-badge">
                                    <FiStar />
                                    IHRC
                                </div>
                            </div>
                            <div className="benefits__card-content">
                                <p className="benefits__card-role">{member.role}</p>
                                <h3 className="benefits__card-title">{member.name}</h3>
                                <p className="benefits__card-desc">{member.description}</p>
                            </div>
                            <div className="benefits__card-shine"></div>
                        </article>
                    ))}
                </div>

                <div className="benefits__actions">
                    <Link to="/team" className="benefits__cta">
                        View Full Team
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Benefits
