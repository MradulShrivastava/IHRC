import React, { useEffect, useRef } from 'react'
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi'
import './Events.css'

const Events = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('events--visible')
                    }
                })
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const events = [
        {
            date: { day: '15', month: 'MAR' },
            title: 'HR Leaders Summit 2026',
            description: 'Annual flagship event bringing together top HR leaders from Indore and Central India for a day of insights and networking.',
            location: 'Sayaji Hotel, Indore',
            time: '9:00 AM - 6:00 PM',
            tag: 'Summit',
            tagColor: '#6B21A8'
        },
        {
            date: { day: '22', month: 'MAR' },
            title: 'Talent Acquisition Masterclass',
            description: 'Deep dive into modern recruitment strategies, employer branding, and building high-performing talent pipelines.',
            location: 'Brilliant Convention Centre',
            time: '2:00 PM - 5:00 PM',
            tag: 'Workshop',
            tagColor: '#14B8A6'
        },
        {
            date: { day: '05', month: 'APR' },
            title: 'HR Tech & Innovation Meetup',
            description: 'Explore the latest HR technology trends, AI in HR, and digital transformation of people processes.',
            location: 'Cube Space Coworking, Vijay Nagar',
            time: '6:00 PM - 8:30 PM',
            tag: 'Meetup',
            tagColor: '#EC4899'
        },
        {
            date: { day: '18', month: 'APR' },
            title: 'Employee Wellness Workshop',
            description: 'Learn strategies for building a culture of well-being, mental health support, and employee engagement programs.',
            location: 'Hotel Radisson Blu, Indore',
            time: '10:00 AM - 1:00 PM',
            tag: 'Workshop',
            tagColor: '#F59E0B'
        }
    ]

    return (
        <section className="events section" id="events" ref={sectionRef}>
            <div className="container">
                <span className="events__label">Upcoming Events</span>
                <h2 className="section-title">
                    Don't Miss Our{' '}
                    <span className="gradient-text">Next Gathering</span>
                </h2>
                <p className="section-subtitle">
                    From intimate workshops to grand summits, every IHRC event is designed
                    to accelerate your growth and expand your network.
                </p>

                <div className="events__grid">
                    {events.map((event, index) => (
                        <div className="events__card" key={index}>
                            <div className="events__card-date">
                                <span className="events__card-day">{event.date.day}</span>
                                <span className="events__card-month">{event.date.month}</span>
                            </div>
                            <div className="events__card-content">
                                <div className="events__card-tag" style={{ '--tag-color': event.tagColor }}>
                                    {event.tag}
                                </div>
                                <h3 className="events__card-title">{event.title}</h3>
                                <p className="events__card-desc">{event.description}</p>
                                <div className="events__card-meta">
                                    <div className="events__card-meta-item">
                                        <FiMapPin size={14} />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="events__card-meta-item">
                                        <FiClock size={14} />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                                <a href="#" className="events__card-link" id={`event-register-${index}`}>
                                    Register Now <FiArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="events__more">
                    <a href="#" className="events__more-btn" id="view-all-events-btn">
                        <FiCalendar />
                        View Full Calendar
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Events
