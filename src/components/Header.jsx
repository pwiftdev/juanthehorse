import './Header.css'
import logo from '../../assets/juanlogo.png'

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
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
        
        <nav className="header-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('how-to-buy')} className="nav-link nav-link-cta">
            Buy Now
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

