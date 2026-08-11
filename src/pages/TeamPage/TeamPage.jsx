import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiHeart, FiStar } from 'react-icons/fi'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProfileMedia from '../../components/ProfileMedia/ProfileMedia'
import img1 from "../../Assets/Images/img1.jpeg"
import img2 from "../../Assets/Images/img2.jpeg"
import img3 from "../../Assets/Images/img3.jpeg"

import './TeamPage.css'

const TeamPage = () => {
    const teamMembers = [
        {
            name: 'Raman Shukla',
            role: 'Founder & Visionary',
            image: '/images/RamanShukla.jpg',
            accent: 'purple',
            summary:
                'Leading the vision of IHRC with a commitment to stronger HR leadership, deeper collaboration, and a truly supportive professional circle.',
            mayu: 'Community Vision'
        },
        {
            name: 'IHRC Leadership Team',
            role: 'Rajshekhar Taksande',
            image: '/images/team-member-2.jpeg',
            accent: 'gold',
            summary:
                'Shapes collaborations, events, and learning opportunities that keep the circle practical, credible, and high impact for members.',
            focus: 'Strategic Programs'
        },
        {
            name: 'IHRC Leadership Team',
            role: 'Deepa Vishwakarma',
            accent: 'pink',
            summary:
                'Strengthens trusted member relationships and helps every professional interaction inside IHRC feel personal, warm, and worthwhile.',
            focus: 'Member Engagement',
            isPlaceholder: true
        },

        // {
        //     name: 'IHRC Leadership Team',
        //     role: 'Aastha Shrivastava',
        //     image: '/images/team-member-3.jpeg',
        //     accent: 'teal',
        //     summary:
        //         'Brings thoughtful coordination and consistent follow-through so every IHRC initiative feels smooth, polished, and member-focused.',
        //     mayuu: 'Operations Excellence'
        // },

        {
            name: 'IHRC Leadership Team',
            role: 'Jaidev Palsodia',
            image: img1,
            accent: 'teal',
            summary:
                'Brings thoughtful coordination and consistent follow-through so every IHRC initiative feels smooth, polished, and member-focused.',
            focus: 'Operations Excellence'
        },

        {
            name: 'IHRC Leadership Team',
            role: 'Vishakha Karnik',
            image: img2,
            accent: 'teal',
            summary:
                'Helps keep partnerships, member support, and internal coordination thoughtful so the community experience stays strong and dependable.',
            focus: 'Community Coordination'
        },

        {
            name: 'IHRC Leadership Team',
            role: 'Rashi Jain',
            image: img3,
            accent: 'teal',
            summary:
                'Supports member-facing initiatives with care and consistency so IHRC conversations and programs feel polished and welcoming.',
            focus: 'Member Support'
        }
    ]

    const supportingMembers = teamMembers.slice(1)

    return (
        <>
            <Navbar />

            <main className="team-page">
                <section className="team-hero">
                    <div className="team-hero__bg team-hero__bg--1"></div>
                    <div className="team-hero__bg team-hero__bg--2"></div>
                    <div className="container">
                        <div className="team-hero__breadcrumbs">
                            <Link to="/" className="team-hero__back">
                                <FiArrowLeft />
                                Back to Home
                            </Link>
                        </div>

                        <div className="team-hero__content">
                            <span className="team-hero__label">Our Team</span>
                            <h1 className="team-hero__title">
                                The People Who Bring <span className="gradient-text">IHRC</span> to Life
                            </h1>
                            <p className="team-hero__subtitle">
                                The full IHRC team lives here. Behind every event, connection, and
                                learning experience is a group committed to building a warmer,
                                stronger, and more ambitious HR community.
                            </p>

                            <div className="team-hero__stats">
                                <div className="team-hero__stat">
                                    <strong>{teamMembers.length}</strong>
                                    <span>Team Members</span>
                                </div>
                                <div className="team-hero__stat">
                                    <strong>1000+</strong>
                                    <span>Professionals Reached</span>
                                </div>
                                <div className="team-hero__stat">
                                    <strong>Purpose</strong>
                                    <span>People First</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-showcase section">
                    <div className="container">
                        <div className="team-showcase__feature">
                            <div className="team-showcase__feature-image">
                                <ProfileMedia
                                    image={teamMembers[0].image}
                                    alt={teamMembers[0].name}
                                    label={teamMembers[0].name}
                                    className="team-showcase__image"
                                />
                                <div className="team-showcase__glow"></div>
                            </div>

                            <div className="team-showcase__feature-content">
                                <span className="team-showcase__tag">{teamMembers[0].role}</span>
                                <h2 className="team-showcase__name">{teamMembers[0].name}</h2>
                                <p className="team-showcase__copy">{teamMembers[0].summary}</p>
                                <p className="team-showcase__copy">
                                    His leadership continues to shape IHRC as a trusted space for
                                    collaboration, practical insight, and long-term growth for HR professionals.
                                </p>

                                <div className="team-showcase__chips">
                                    <span>Vision-led</span>
                                    <span>Community Builder</span>
                                    <span>HR Network Catalyst</span>
                                </div>
                            </div>
                        </div>

                        <div className="team-grid__intro">
                            {/* <span className="team-grid__label">Core Team</span> */}
                            <h2 className="team-grid__title">Meet the people supporting the IHRC mission</h2>
                            <p className="team-grid__subtitle">
                                These team members help shape member relationships, partnerships,
                                programs, and the overall experience of the community.
                            </p>
                        </div>

                        <div className="team-grid">
                            {supportingMembers.map((member, index) => (
                                <article
                                    className={`team-card team-card--${member.accent} ${supportingMembers.length === 5 && index === 3 ? 'team-card--offset-left' : ''} ${supportingMembers.length === 5 && index === 4 ? 'team-card--offset-right' : ''}`.trim()}
                                    key={index}
                                >
                                    <div className="team-card__image-wrap">
                                        <ProfileMedia
                                            image={member.image}
                                            alt={member.role}
                                            label={member.role}
                                            isPlaceholder={member.isPlaceholder}
                                            className="team-card__image"
                                        />
                                        <span className="team-card__focus">
                                            <FiStar />
                                            {member.focus}
                                        </span>
                                    </div>
                                    <div className="team-card__content">
                                        <p className="team-card__role">{member.role}</p>
                                        <h3 className="team-card__name">{member.name}</h3>
                                        <p className="team-card__summary">{member.summary}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="team-values">
                    <div className="container">
                        <div className="team-values__panel">
                            <div>
                                <span className="team-values__label">Why This Team Matters</span>
                                <h2 className="team-values__title">
                                    Built on trust, care, and meaningful <span className="gradient-text">HR collaboration</span>
                                </h2>
                            </div>

                            <div className="team-values__items">
                                <div className="team-values__item">
                                    <FiHeart />
                                    <div>
                                        <h3>People-first culture</h3>
                                        <p>Every initiative is designed around authentic member value, not just activity.</p>
                                    </div>
                                </div>
                                <div className="team-values__item">
                                    <FiStar />
                                    <div>
                                        <h3>Thoughtful experiences</h3>
                                        <p>From events to conversations, the team focuses on quality, warmth, and relevance.</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/#contact" className="team-values__cta">
                                Connect With IHRC
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default TeamPage
