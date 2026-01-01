import './Hero.css'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { FaCopy, FaCheck } from 'react-icons/fa'

function Hero() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '7eLSZuUZ66YA1JPYmpG9ApgoTdZmzHDfz32YngbPpump'

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video 
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-content">
          <h1 className="hero-title">Juan The Horse</h1>
          <p className="hero-subtitle">$JUAN</p>
          <p className="hero-tagline">Just spawns anywhere and doesn't give a f*ck</p>
          
          <div className="hero-contract">
            <div className="contract-wrapper">
              <span className="contract-value">{contractAddress}</span>
              <button 
                className="copy-button"
                onClick={copyToClipboard}
                title={copied ? 'Copied!' : 'Copy address'}
              >
                {copied ? <><FaCheck /> <span>Copied</span></> : <><FaCopy /> <span>Copy</span></>}
              </button>
            </div>
          </div>

          <div className="hero-buttons">
            <button 
              className="hero-button primary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
            <button 
              className="hero-button secondary"
              onClick={() => scrollToSection('memes')}
            >
              View Memes
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <IoChevronDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  )
}

export default Hero

