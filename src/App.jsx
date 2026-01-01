import { useState, useEffect } from 'react'
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

  useEffect(() => {
    // Prevent scrolling during load
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <div className="App">
        <Header />
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

