import './About.css'
import { useEffect, useRef } from 'react'
import { GiHorseHead, GiRunningShoe, GiFireBowl } from 'react-icons/gi'
import { FaFire } from 'react-icons/fa'
import kymLogo from '../../assets/KnowYourMemelogo.png'

function About() {
  const originRef = useRef(null)
  const yearRef = useRef(null)
  const thesisRef = useRef(null)
  const originBgRef = useRef(null)
  const yearBgRef = useRef(null)
  const thesisBgRef = useRef(null)
  const immersiveStoryRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    const refs = [originRef, yearRef, thesisRef]
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

      // Scroll effects for parallax and gradient movement
      const handleScroll = () => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight

        // Parallax effect for each scene
        const scenes = [
          { scene: originRef.current, bg: originBgRef.current },
          { scene: yearRef.current, bg: yearBgRef.current },
          { scene: thesisRef.current, bg: thesisBgRef.current }
        ]

        scenes.forEach(({ scene, bg }) => {
          if (scene) {
            const rect = scene.getBoundingClientRect()
            const sceneTop = rect.top + scrollY
            const sceneCenter = sceneTop + rect.height / 2
            const distanceFromCenter = scrollY - sceneCenter + windowHeight / 2
            const parallaxOffset = distanceFromCenter * 0.3

            // Calculate scroll progress (0 to 1)
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
            const reverseProgress = 1 - scrollProgress

            // Parallax for content with scale and blur effects
            const content = scene.querySelector('.scene-content')
            if (content) {
              const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
              const scale = 0.95 + (progress * 0.05) // Scale from 0.95 to 1
              const blur = Math.max(0, (1 - progress) * 10) // Blur when not in view
              
              content.style.transform = `translateY(${parallaxOffset * 0.5}px) scale(${scale})`
              content.style.opacity = Math.max(0.3, Math.min(1, progress))
              content.style.filter = `blur(${blur}px)`
            }

            // Animate gradient layers based on scroll
            if (bg) {
              const gradientLayers = bg.querySelectorAll('.gradient-layer')
              gradientLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.3
                const xOffset = scrollProgress * 100 * speed
                const yOffset = scrollProgress * 50 * speed
                layer.style.transform = `translate(${xOffset}%, ${yOffset}%) scale(${1 + scrollProgress * 0.2})`
              })
            }

            // Add shimmer effect to titles when in view
            const title = scene.querySelector('.scene-title')
            if (title && scrollProgress > 0.3 && scrollProgress < 0.7) {
              title.style.textShadow = `0 0 ${30 * scrollProgress}px rgba(218, 165, 32, ${scrollProgress * 0.5})`
            }
          }
        })
      }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">The Legend of $JUAN</h2>
          <p className="section-subtitle">2026: Year of the Horse</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="banner-container">
          <div className="banner-track">
            {/* First set */}
            <div className="story-card">
              <div className="story-icon">
                <GiHorseHead />
              </div>
              <h3>$juan started the meta</h3>
            </div>
            <div className="story-card highlight">
              <div className="story-icon">
                <GiRunningShoe />
              </div>
              <h3>$juan is the runner</h3>
            </div>
            <div className="story-card">
              <div className="story-icon">
                <GiFireBowl />
              </div>
              <h3>$juan is freedom</h3>
            </div>
            <div className="story-card">
              <div className="story-icon">
                <FaFire />
              </div>
              <h3>$juan leads the charge</h3>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="story-card">
              <div className="story-icon">
                <GiHorseHead />
              </div>
              <h3>$juan started the meta</h3>
            </div>
            <div className="story-card highlight">
              <div className="story-icon">
                <GiRunningShoe />
              </div>
              <h3>$juan is the runner</h3>
            </div>
            <div className="story-card">
              <div className="story-icon">
                <GiFireBowl />
              </div>
              <h3>$juan is freedom</h3>
            </div>
            <div className="story-card">
              <div className="story-icon">
                <FaFire />
              </div>
              <h3>$juan leads the charge</h3>
            </div>
          </div>
        </div>

        <div className="immersive-story" ref={immersiveStoryRef}>
          {/* Origin Chapter */}
          <div className="story-scene origin-scene" ref={originRef}>
            <div className="scene-bg origin-bg" ref={originBgRef}>
              <div className="gradient-layer gradient-layer-1"></div>
              <div className="gradient-layer gradient-layer-2"></div>
              <div className="gradient-layer gradient-layer-3"></div>
            </div>
            <div className="scene-content">
              <div className="scene-label">THE ORIGIN</div>
              <h2 className="scene-title">
                <span className="title-word">Horse</span>
                <span className="title-word">On</span>
                <span className="title-word highlight">Balcony</span>
              </h2>
              <p className="scene-text">
                2020. A legend was born.
              </p>
              <a 
                href="https://knowyourmeme.com/memes/juan-horse-on-balcony" 
                target="_blank" 
                rel="noopener noreferrer"
                className="kym-link"
              >
                <img src={kymLogo} alt="Know Your Meme" />
              </a>
            </div>
          </div>

          {/* Year of Horse Chapter */}
          <div className="story-scene year-scene" ref={yearRef}>
            <div className="scene-bg year-bg" ref={yearBgRef}>
              <div className="gradient-layer gradient-layer-1"></div>
              <div className="gradient-layer gradient-layer-2"></div>
              <div className="gradient-layer gradient-layer-3"></div>
            </div>
            <div className="scene-content">
              <div className="scene-label">2026</div>
              <h2 className="scene-title">
                <span className="title-word">Year of</span>
                <span className="title-word highlight">the Horse</span>
              </h2>
              <p className="scene-text">
                Fire. Freedom. Energy.
              </p>
            </div>
          </div>

          {/* The Thesis Chapter */}
          <div className="story-scene final-scene thesis-scene" ref={thesisRef}>
            <div className="scene-bg thesis-bg" ref={thesisBgRef}>
              <div className="gradient-layer gradient-layer-1"></div>
              <div className="gradient-layer gradient-layer-2"></div>
              <div className="gradient-layer gradient-layer-3"></div>
            </div>
            <div className="scene-content">
              <div className="scene-label">THE THESIS</div>
              <p className="scene-quote">
                Some say it's the <span className="strike">worst year</span>
              </p>
              <h2 className="scene-title">
                <span className="title-word">Counter</span>
                <span className="title-word">the</span>
                <span className="title-word highlight">narrative</span>
              </h2>
              <div className="final-message">
                <p className="juan-text">$juan is that meme</p>
                <p className="juan-text">$juan is freedom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

