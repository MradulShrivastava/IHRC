import React, { useEffect, useRef } from 'react'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import './CTA.css'

const CTA = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cta--visible')
                    }
                })
            },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="cta section" id="join" ref={sectionRef}>
            <div className="container">
                <div className="cta__card">
                    {/* Background decoration */}
                    <div className="cta__bg-circle cta__bg-circle--1"></div>
                    <div className="cta__bg-circle cta__bg-circle--2"></div>

                    <div className="cta__content">
                        <h2 className="cta__title">
                            Ready to Join Indore's <br />
                            <span className="cta__title-highlight">Strongest HR Network?</span>
                        </h2>
                        <p className="cta__text">
                            Become part of a thriving community of HR professionals who are shaping the future
                            of workplaces in Indore. Your journey to better connections starts here.
                        </p>

                        <div className="cta__form">
                            <div className="cta__input-wrapper">
                                <FiMail className="cta__input-icon" />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="cta__input"
                                    id="cta-email-input"
                                />
                            </div>
                            <button className="cta__submit" id="cta-submit-btn">
                                Join IHRC
                                <FiArrowRight className="cta__submit-icon" />
                            </button>
                        </div>

                        <p className="cta__disclaimer">
                            Free to join • No spam • Unsubscribe anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
