import { useState, useEffect, useRef } from 'react'
import './TokenInfoBar.css'

const DEXSCREENER_API = 'https://api.dexscreener.com/token-pairs/v1/solana'
const TOKEN_ADDRESS = '7eLSZuUZ66YA1JPYmpG9ApgoTdZmzHDfz32YngbPpump'
const POLL_INTERVAL = 203

function TokenInfoBar() {
  const [tokenData, setTokenData] = useState(null)
  const tokenDataRef = useRef(null)

  useEffect(() => {
    tokenDataRef.current = tokenData
  }, [tokenData])

  const fetchTokenData = async () => {
    try {
      const response = await fetch(`${DEXSCREENER_API}/${TOKEN_ADDRESS}`)
      if (!response.ok) {
        if (response.status === 429) {
          return
        }
        throw new Error('Failed to fetch token data')
      }
      const data = await response.json()
      
      if (Array.isArray(data) && data.length > 0) {
        const validPairs = data.filter(pair => 
          pair && (pair.liquidity?.usd || pair.priceUsd || pair.fdv)
        )
        
        if (validPairs.length > 0) {
          const bestPair = validPairs.reduce((prev, current) => 
            (current.liquidity?.usd || 0) > (prev.liquidity?.usd || 0) ? current : prev
          )
          setTokenData(bestPair)
        }
      } else if (data.pairs && Array.isArray(data.pairs) && data.pairs.length > 0) {
        const validPairs = data.pairs.filter(pair => 
          pair && (pair.liquidity?.usd || pair.priceUsd || pair.fdv)
        )
        if (validPairs.length > 0) {
          const bestPair = validPairs.reduce((prev, current) => 
            (current.liquidity?.usd || 0) > (prev.liquidity?.usd || 0) ? current : prev
          )
          setTokenData(bestPair)
        }
      }
    } catch (err) {
      console.error('Error fetching token data:', err)
    }
  }

  useEffect(() => {
    fetchTokenData()
    const interval = setInterval(() => {
      fetchTokenData()
    }, POLL_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  if (!tokenData) {
    return null
  }

  const formatValue = (value) => {
    const num = parseFloat(value)
    if (!num || num === 0 || isNaN(num)) return 'N/A'
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`
    if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`
    if (num >= 1) return `$${num.toFixed(4)}`
    return `$${num.toFixed(8)}`
  }

  const marketCap = parseFloat(tokenData.fdv || tokenData.marketCap || 0)
  const price = parseFloat(tokenData.priceUsd || 0)
  const liquidity = parseFloat(tokenData.liquidity?.usd || 0)
  const volume24h = parseFloat(tokenData.volume?.h24 || 0)
  const priceChange24h = parseFloat(tokenData.priceChange?.h24 || 0)
  const priceChange6h = parseFloat(tokenData.priceChange?.h6 || 0)
  const priceChange1h = parseFloat(tokenData.priceChange?.h1 || 0)
  const txns24h = tokenData.txns?.h24 || {}
  const totalTxns = (parseInt(txns24h.buys) || 0) + (parseInt(txns24h.sells) || 0)

  const infoItems = [
    { label: 'Price', value: formatValue(price) },
    { label: 'Market Cap', value: formatValue(marketCap) },
    { label: 'Liquidity', value: formatValue(liquidity) },
    { label: '24h Volume', value: formatValue(volume24h) },
    { label: '24h Change', value: `${priceChange24h > 0 ? '+' : ''}${priceChange24h.toFixed(2)}%`, isChange: true, change: priceChange24h },
    { label: '6h Change', value: `${priceChange6h > 0 ? '+' : ''}${priceChange6h.toFixed(2)}%`, isChange: true, change: priceChange6h },
    { label: '1h Change', value: `${priceChange1h > 0 ? '+' : ''}${priceChange1h.toFixed(2)}%`, isChange: true, change: priceChange1h },
    { label: '24h Txns', value: totalTxns > 0 ? totalTxns.toLocaleString() : 'N/A' },
    { label: 'Buys', value: txns24h.buys ? txns24h.buys.toLocaleString() : 'N/A' },
    { label: 'Sells', value: txns24h.sells ? txns24h.sells.toLocaleString() : 'N/A' },
  ]

  // Duplicate for seamless loop
  const duplicatedItems = [...infoItems, ...infoItems]

  return (
    <div className="token-info-bar">
      <div className="info-bar-track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="info-item">
            <span className="info-label">{item.label}:</span>
            <span className={`info-value ${item.isChange ? (item.change > 0 ? 'positive' : item.change < 0 ? 'negative' : '') : ''}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokenInfoBar

