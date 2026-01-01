import { useEffect, useState } from 'react'
import './Loader.css'
import logo from '../../assets/juanlogo.png'

function Loader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              onLoadComplete()
            }, 1000) // Match exit animation duration
          }, 500) // Pause at 100% before exit
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadComplete])

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
            <span className="title-word">Stabling</span>
            <span className="title-juan">$JUAN</span>
          </h1>
          <div className="loader-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
            <div className="progress-shimmer"></div>
          </div>
          <div className="progress-text">{Math.floor(Math.min(progress, 100))}%</div>
        </div>
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

