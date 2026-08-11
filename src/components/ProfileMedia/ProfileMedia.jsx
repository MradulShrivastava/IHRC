import React from 'react'
import './ProfileMedia.css'

const getInitials = (label = '') =>
    label
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() || '')
        .join('')

const ProfileMedia = ({ image, alt, label, className = '', isPlaceholder = false }) => {
    if (!isPlaceholder && image) {
        return <img src={image} alt={alt} className={className} />
    }

    return (
        <div
            className={`profile-media profile-media--placeholder ${className}`.trim()}
            aria-label={alt}
            role="img"
        >
            <div className="profile-media__orb profile-media__orb--one"></div>
            <div className="profile-media__orb profile-media__orb--two"></div>
            <span className="profile-media__initials">{getInitials(label || alt)}</span>
          
        </div>
    )
}

export default ProfileMedia
