import './YearOfHorse.css'
import { GiHorseHead, GiFireBowl, GiTrophy, GiRunningShoe } from 'react-icons/gi'
import { FaFire } from 'react-icons/fa'

function YearOfHorse() {
  return (
    <section className="year-of-horse" id="year-of-horse">
      <div className="yoh-container">
        <div className="yoh-content">
          <div className="yoh-header">
            <h2 className="yoh-title">2026: Year of the Horse</h2>
            <div className="yoh-subtitle">The Fire Element Awakens</div>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <GiHorseHead />
              </div>
              <h3>Year of the Horse</h3>
              <p>2026 marks the beginning of a powerful cycle in the Chinese zodiac</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaFire />
              </div>
              <h3>Animal Meta</h3>
              <p>Leading the charge in the new era of animal-themed tokens</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <GiTrophy />
              </div>
              <h3>Iconic Meme</h3>
              <p>A legendary meme that transcends markets and cultures</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <GiRunningShoe />
              </div>
              <h3>Last Runner of Q4</h3>
              <p>The final sprint before the new year begins</p>
            </div>
          </div>

          <div className="thesis-box">
            <div className="thesis-header">
              <span className="thesis-label">The Thesis</span>
            </div>
            <p className="thesis-text">
              In Chinese astrology, it's said to be the <span className="warning-text">"Worst year of your life"</span> 
              but my thesis is to counter it with buying one of the better memes end of year...
            </p>
            <div className="thesis-conclusion">
              <span className="juan-highlight">$juan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YearOfHorse

