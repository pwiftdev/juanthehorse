import { useEffect, useState } from 'react'
import './Loader.css'
import logo from '../../assets/juanlogo.png'

function Loader({ onLoadComplete }) {
  const [isExiting, setIsExiting] = useState(false)

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(() => {
      onLoadComplete()
    }, 1000) // Match exit animation duration
  }

  return (
    <div className={`loader-container ${isExiting ? 'exit' : ''}`}>
      <div className="loader-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="loader-content">
        <div className="loader-logo-container">
          <div className="logo-glow"></div>
          <img src={logo} alt="Juan" className="loader-logo" />
          <div className="logo-ring"></div>
          <div className="logo-ring ring-2"></div>
        </div>

        <div className="loader-text">
          <h1 className="loader-title">
            <span className="title-word">Welcome to</span>
            <span className="title-juan">$JUAN</span>
          </h1>
        </div>

        <button className="enter-button" onClick={handleEnter}>
          <span className="button-text">Enter</span>
          <div className="button-shine"></div>
        </button>
      </div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.2}s`,
            '--x': `${Math.random() * 100}vw`,
            '--y': `${Math.random() * 100}vh`
          }}></div>
        ))}
      </div>
    </div>
  )
}

export default Loader

