import './Hero.css'
import { IoChevronDown } from 'react-icons/io5'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
          <div className="hero-buttons">
            <button 
              className="hero-button primary"
              onClick={() => scrollToSection('how-to-buy')}
            >
              Buy $JUAN
            </button>
            <button 
              className="hero-button secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
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

