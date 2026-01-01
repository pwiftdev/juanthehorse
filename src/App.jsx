import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowToBuy from './components/HowToBuy'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <HowToBuy />
        <SocialLinks />
      </div>
    </Router>
  )
}

export default App

