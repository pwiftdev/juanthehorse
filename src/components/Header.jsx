import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/juanlogo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        </nav>
      </div>
    </>
  )
}

export default Header

