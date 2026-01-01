import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import TokenInfoBar from './components/TokenInfoBar'
import About from './components/About'
import MemeLibrary from './components/MemeLibrary'
import SocialLinks from './components/SocialLinks'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    // Prevent scrolling during load
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Play audio when main page loads
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Audio autoplay prevented:', err)
        })
      }
    }
  }, [isLoading])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className="App">
        <audio ref={audioRef} src="/horsesound.mp3" loop />
        <Header audioRef={audioRef} />
        <Hero />
        <TokenInfoBar />
        <About />
        <MemeLibrary />
        <SocialLinks />
      </div>
    </Router>
  )
}

export default App

