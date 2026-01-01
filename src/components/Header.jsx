import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/juanlogo.png'

function Header({ audioRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const handleMute = () => {
    if (audioRef?.current) {
      const newMuted = !isMuted
      setIsMuted(newMuted)
      audioRef.current.muted = newMuted
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo">
              <img src={logo} alt="Juan The Horse Logo" className="logo-img" />
            </div>
            <div className="header-text">
              <h1 className="header-title">Juan The Horse</h1>
              <span className="header-ticker">$JUAN</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <a 
              href="https://x.com/minemjuan?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              X
            </a>
            <a 
              href="https://x.com/i/communities/2006098214051872848" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Community
            </a>
            <a 
              href="https://youtu.be/POvEPMKTdDU?si=CBWK-wbBr9TtxkgW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              YouTube
            </a>
            <a 
              href="https://knowyourmeme.com/memes/juan-horse-on-balcony" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Know Your Meme
            </a>
            
            {/* Volume Controls */}
            <div className="volume-controls">
              <button 
                onClick={handleMute} 
                className="mute-button"
                aria-label={isMuted ? "Unmute" : "Mute"}
                title={isMuted ? "Unmute" : "Mute"}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {isMuted ? (
                    <>
                      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </>
                  ) : (
                    <>
                      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                </svg>
              </button>
              <div className="volume-slider-container">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={isMuted ? 0 : volume * 100} 
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value) / 100
                    setVolume(newVolume)
                    if (audioRef?.current) {
                      audioRef.current.volume = newVolume
                      if (newVolume > 0 && isMuted) {
                        setIsMuted(false)
                        audioRef.current.muted = false
                      }
                    }
                  }}
                  className="volume-slider"
                  aria-label="Volume slider"
                />
                <div className="volume-fill" style={{ width: `${isMuted ? 0 : volume * 100}%` }}></div>
              </div>
            </div>
          </nav>

          {/* Hamburger Button */}
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button 
          className="close-menu"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        
        <nav className="mobile-nav">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            About
          </button>
          <a 
            href="https://x.com/minemjuan?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            X
          </a>
          <a 
            href="https://x.com/i/communities/2006098214051872848" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            Community
          </a>
          <a 
            href="https://youtu.be/POvEPMKTdDU?si=CBWK-wbBr9TtxkgW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            YouTube
          </a>
          <a 
            href="https://knowyourmeme.com/memes/juan-horse-on-balcony" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            Know Your Meme
          </a>
          
          {/* Volume Controls for Mobile */}
          <div className="mobile-volume-controls">
            <button 
              onClick={handleMute} 
              className="mobile-mute-button"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isMuted ? (
                  <>
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </>
                ) : (
                  <>
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </>
                )}
              </svg>
              <span>{isMuted ? 'Unmute' : 'Mute'}</span>
            </button>
            <div className="mobile-volume-slider-container">
              <span className="volume-label">Volume</span>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={isMuted ? 0 : volume * 100} 
                onChange={(e) => {
                  const newVolume = parseFloat(e.target.value) / 100
                  setVolume(newVolume)
                  if (audioRef?.current) {
                    audioRef.current.volume = newVolume
                    if (newVolume > 0 && isMuted) {
                      setIsMuted(false)
                      audioRef.current.muted = false
                    }
                  }
                }}
                className="mobile-volume-slider"
                aria-label="Volume slider"
              />
              <div className="mobile-volume-fill" style={{ width: `${isMuted ? 0 : volume * 100}%` }}></div>
              <span className="volume-percentage">{Math.round(isMuted ? 0 : volume * 100)}%</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header

