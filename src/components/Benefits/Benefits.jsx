import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar } from 'react-icons/fi'
import ProfileMedia from '../ProfileMedia/ProfileMedia'
import img1 from '../../Assets/Images/img1.jpeg'
import img2 from '../../Assets/Images/img2.jpeg'
import img3 from '../../Assets/Images/img3.jpeg'
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
            name: 'Rajshekhar Taksande',
            role: 'Strategic Programs',
            description: 'Helps shape collaborations, events, and high-value learning opportunities that keep the IHRC network practical and trusted.',
            image: '/images/team-member-2.jpeg',
            accent: 'gold'
        },
        {
            name: 'Deepa Vishwakarma',
            role: 'Member Engagement',
            description: 'Focused on warm member support and thoughtful relationship-building so each IHRC interaction feels personal and welcoming.',
            accent: 'pink',
            isPlaceholder: true
        },
        {
            name: 'Jaidev Palsodia',
            role: 'Operations Excellence',
            description: 'Brings dependable coordination and follow-through that help IHRC initiatives feel smooth, clear, and member-focused.',
            image: img1,
            accent: 'teal'
        },
        {
            name: 'Vishakha Karnik',
            role: 'Community Coordination',
            description: 'Supports partnerships and internal coordination so the overall member experience stays strong, polished, and consistent.',
            image: img2,
            accent: 'purple'
        },
        {
            name: 'Rashi Jain',
            role: 'Member Support',
            description: 'Adds care and consistency to member-facing touchpoints, helping events and conversations feel thoughtful from start to finish.',
            image: img3,
            accent: 'pink'
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
                        <article
                            className={`benefits__card benefits__card--${member.accent} ${members.length === 6 && index === 4 ? 'benefits__card--offset-left' : ''} ${members.length === 6 && index === 5 ? 'benefits__card--offset-right' : ''}`.trim()}
                            key={index}
                        >
                            <div className="benefits__card-image-wrap">
                                <ProfileMedia
                                    image={member.image}
                                    alt={member.name}
                                    label={member.name}
                                    isPlaceholder={member.isPlaceholder}
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
