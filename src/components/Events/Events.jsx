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
            date: { day: '24', month: 'April' },
            title: 'Industry–Academia Gap and Current Trends in Recruitment',
            description: 'A discussion on the Industry–Academia gap and emerging recruitment trends shaping the future workforce.',
            location: 'Chameli Devi Group of Institutions , Indore',
            time: '11:00 AM – 1:20 PM',
            tag: 'Summit',
            tagColor: '#6B21A8'
        },
        
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
