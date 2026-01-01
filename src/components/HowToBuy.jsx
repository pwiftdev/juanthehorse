import { useState } from 'react'
import './HowToBuy.css'
import { IoWalletOutline, IoCheckmarkCircle, IoCopyOutline } from 'react-icons/io5'
import { FaCoins, FaExchangeAlt } from 'react-icons/fa'
import { GiHorseHead } from 'react-icons/gi'
import { SiSolana } from 'react-icons/si'

function HowToBuy() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '7eLSZuUZ66YA1JPYmpG9ApgoTdZmzHDfz32YngbPpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="how-to-buy" id="how-to-buy">
      <div className="htb-container">
        <div className="htb-header">
          <h2 className="section-title-dark">How to Buy $JUAN</h2>
          <div className="title-underline-dark"></div>
        </div>

        <div className="contract-box">
          <div className="contract-label">
            <SiSolana className="solana-icon" />
            Contract Address (Solana)
          </div>
          <div className="contract-address-wrapper">
            <code className="contract-address">{contractAddress}</code>
            <button 
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <IoCheckmarkCircle /> Copied!
                </>
              ) : (
                <>
                  <IoCopyOutline /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">
              <IoWalletOutline />
            </div>
            <div className="step-number">1</div>
            <h3>Get a Wallet</h3>
            <p>Download Phantom or Solflare wallet for Solana. Available on mobile and browser extension.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaCoins />
            </div>
            <div className="step-number">2</div>
            <h3>Add SOL</h3>
            <p>Purchase SOL from an exchange like Coinbase or Binance and send it to your wallet.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaExchangeAlt />
            </div>
            <div className="step-number">3</div>
            <h3>Connect to DEX</h3>
            <p>Go to Raydium or Jupiter and connect your wallet to start trading.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <GiHorseHead />
            </div>
            <div className="step-number">4</div>
            <h3>Swap for $JUAN</h3>
            <p>Paste the contract address, enter the amount of SOL to swap, and confirm the transaction.</p>
          </div>
        </div>

        <div className="cta-box">
          <h3>Ready to Join the Herd?</h3>
          <p>Be like $juan. Don't give a f*ck. Just run.</p>
          <div className="cta-buttons">
            <a href="https://raydium.io" target="_blank" rel="noopener noreferrer" className="cta-button primary">
              Buy on Raydium
            </a>
            <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Buy on Jupiter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy

