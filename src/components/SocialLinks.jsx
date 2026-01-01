import './SocialLinks.css'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { HiUserGroup } from 'react-icons/hi2'

function SocialLinks() {
  const links = [
    {
      name: 'X',
      url: 'https://x.com/minemjuan?s=21',
      icon: <FaXTwitter />,
      color: '#000000'
    },
    {
      name: 'Community',
      url: 'https://x.com/i/communities/2006098214051872848',
      icon: <HiUserGroup />,
      color: '#1DA1F2'
    },
    {
      name: 'YouTube',
      url: 'https://youtu.be/POvEPMKTdDU?si=CBWK-wbBr9TtxkgW',
      icon: <FaYoutube />,
      color: '#FF0000'
    },
    {
      name: 'Know Your Meme',
      url: 'https://knowyourmeme.com/memes/juan-horse-on-balcony',
      icon: <span className="kym-letter">K</span>,
      color: '#FF6B35'
    }
  ]

  return (
    <div className="social-links">
      <div className="social-links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            style={{ '--link-color': link.color }}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks

