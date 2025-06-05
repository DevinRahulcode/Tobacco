import React from 'react'
import './css/Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero