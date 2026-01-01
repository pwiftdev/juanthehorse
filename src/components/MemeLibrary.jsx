import './MemeLibrary.css'

// Import all meme images
import juanlogo from '../../assets/memes/juanlogo.png'
import photo1 from '../../assets/memes/photo_2026-01-01 12.30.05 (1).jpeg'
import photo2 from '../../assets/memes/photo_2026-01-01 12.30.05.jpeg'
import photo3 from '../../assets/memes/photo_2026-01-01 12.30.06.jpeg'
import photo4 from '../../assets/memes/photo_2026-01-01 12.30.07.jpeg'
import photo5 from '../../assets/memes/photo_2026-01-01 12.30.08 (1).jpeg'
import photo6 from '../../assets/memes/photo_2026-01-01 12.30.08.jpeg'
import photo7 from '../../assets/memes/photo_2026-01-01 12.30.09 (1).jpeg'
import photo8 from '../../assets/memes/photo_2026-01-01 12.30.09.jpeg'
import photo9 from '../../assets/memes/photo_2026-01-01 12.30.19.jpeg'
import photo10 from '../../assets/memes/photo_2026-01-01 12.30.20 (1).jpeg'
import photo11 from '../../assets/memes/photo_2026-01-01 12.30.20 (2).jpeg'
import photo12 from '../../assets/memes/photo_2026-01-01 12.30.20.jpeg'
import photo13 from '../../assets/memes/photo_2026-01-01 12.30.21 (1).jpeg'
import photo14 from '../../assets/memes/photo_2026-01-01 12.30.21.jpeg'
import photo15 from '../../assets/memes/photo_2026-01-01 12.30.49.jpeg'
import photo16 from '../../assets/memes/photo_2026-01-01 12.30.51 (1).jpeg'
import photo17 from '../../assets/memes/photo_2026-01-01 12.30.51 (2).jpeg'
import photo18 from '../../assets/memes/photo_2026-01-01 12.30.51.jpeg'
import photo19 from '../../assets/memes/photo_2026-01-01 12.30.52 (1).jpeg'
import photo20 from '../../assets/memes/photo_2026-01-01 12.30.52.jpeg'
import photo21 from '../../assets/memes/photo_2026-01-01 12.30.53 (1).jpeg'
import photo22 from '../../assets/memes/photo_2026-01-01 12.30.53 (2).jpeg'
import photo23 from '../../assets/memes/photo_2026-01-01 12.30.53.jpeg'
import photo24 from '../../assets/memes/photo_2026-01-01 12.31.21 (1).jpeg'
import photo25 from '../../assets/memes/photo_2026-01-01 12.31.21.jpeg'
import photo26 from '../../assets/memes/photo_2026-01-01 12.31.22 (1).jpeg'
import photo27 from '../../assets/memes/photo_2026-01-01 12.31.22 (2).jpeg'
import photo28 from '../../assets/memes/photo_2026-01-01 12.31.22.jpeg'
import photo29 from '../../assets/memes/photo_2026-01-01 12.31.23.jpeg'
import trishhxy from '../../assets/memes/trishhxy.png'

const memes = [
  juanlogo,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  trishhxy
]

function MemeLibrary() {
  // Duplicate memes array for seamless infinite scroll
  const duplicatedMemes = [...memes, ...memes]
  
  // Shuffle memes for different rows
  const shuffledMemes1 = [...duplicatedMemes]
  const shuffledMemes2 = [...duplicatedMemes].reverse()
  const shuffledMemes3 = [...duplicatedMemes]

  return (
    <section className="meme-library" id="memes">
      <div className="meme-library-header">
        <h2 className="meme-library-title">Mi nem Juan...</h2>
      </div>
      <div className="meme-rows">
        <div className="meme-scroll-container">
          <div className="meme-scroll-track track-1">
            {shuffledMemes1.map((meme, index) => (
              <div key={`row1-${index}`} className="meme-item">
                <img src={meme} alt={`Juan meme ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="meme-scroll-container">
          <div className="meme-scroll-track track-2">
            {shuffledMemes2.map((meme, index) => (
              <div key={`row2-${index}`} className="meme-item">
                <img src={meme} alt={`Juan meme ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="meme-scroll-container">
          <div className="meme-scroll-track track-3">
            {shuffledMemes3.map((meme, index) => (
              <div key={`row3-${index}`} className="meme-item">
                <img src={meme} alt={`Juan meme ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemeLibrary

