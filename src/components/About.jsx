import './About.css'
import { GiHorseHead, GiRunningShoe, GiFireBowl } from 'react-icons/gi'
import { FaFire } from 'react-icons/fa'
import kymLogo from '../../assets/KnowYourMemelogo.png'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">The Legend of $JUAN</h2>
          <p className="section-subtitle">2026: Year of the Horse</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="story-grid">
          <div className="story-card">
            <div className="story-icon">
              <GiHorseHead />
            </div>
            <h3>$juan started the meta</h3>
            <p>Solana is now full of horses. But $juan is him.</p>
          </div>

          <div className="story-card highlight">
            <div className="story-icon">
              <GiRunningShoe />
            </div>
            <h3>$juan is the runner</h3>
            <p>$juan just spawns anywhere and doesn't give a f*ck. Be like $juan.</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <GiFireBowl />
            </div>
            <h3>$juan is freedom</h3>
            <p>$juan represents the freedom, energy, and independence in each one of us traders.</p>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <FaFire />
            </div>
            <h3>$juan leads the charge</h3>
            <p>Leading the new era of animal-themed tokens on Solana.</p>
          </div>
        </div>

        <div className="story-section">
          <div className="story-timeline">
            
            {/* Origin Chapter */}
            <div className="story-chapter">
              <div className="chapter-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="chapter-content">
                <div className="chapter-header">
                  <h3 className="chapter-title">The Origin</h3>
                  <a 
                    href="https://knowyourmeme.com/memes/juan-horse-on-balcony" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="kym-badge"
                  >
                    <img src={kymLogo} alt="Know Your Meme" className="kym-logo-small" />
                  </a>
                </div>
                <div className="chapter-text">
                  <p className="story-paragraph">
                    Juan, also known as <span className="text-highlight">Horse On Balcony</span>, 
                    became an internet legend in 2020.
                  </p>
                  <p className="story-paragraph">
                    The image of a horse standing on a balcony has been used in memes since 2015, 
                    but when the name "Juan" was added in 2020, it exploded into viral fame.
                  </p>
                  <p className="story-paragraph emphasis">
                    Now, Juan is more than a meme — he's a movement.
                  </p>
                </div>
              </div>
            </div>

            {/* Year of Horse Chapter */}
            <div className="story-chapter">
              <div className="chapter-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="chapter-content">
                <div className="chapter-header">
                  <h3 className="chapter-title">2026: Year of the Horse</h3>
                </div>
                <div className="chapter-text">
                  <p className="story-paragraph">
                    <span className="text-highlight">2026 is the Year of the Horse.</span> In Chinese zodiac, 
                    it's a fire element symbolizing freedom, energy, and independence.
                  </p>
                  <p className="story-paragraph">
                    A year destined for breakthrough achievements and conquering obstacles.
                  </p>
                </div>
              </div>
            </div>

            {/* The Thesis Chapter */}
            <div className="story-chapter final">
              <div className="chapter-marker">
                <div className="marker-dot final-dot"></div>
              </div>
              <div className="chapter-content">
                <div className="chapter-header">
                  <h3 className="chapter-title">The Thesis</h3>
                </div>
                <div className="chapter-text">
                  <p className="story-paragraph">
                    Some say it's the <span className="text-warning">"worst year of your life."</span>
                  </p>
                  <p className="story-paragraph">
                    But here's the play: counter the narrative by aping into the best meme of the cycle.
                  </p>
                  <p className="story-paragraph final-statement">
                    <span className="juan-highlight">$juan is that meme.</span>
                    <br />
                    <span className="juan-highlight">$juan is the energy in every degen trader.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

