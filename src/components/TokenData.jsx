import { useState, useEffect, useRef } from 'react'
import './TokenData.css'

const DEXSCREENER_API = 'https://api.dexscreener.com/token-pairs/v1/solana'
const TOKEN_ADDRESS = '7eLSZuUZ66YA1JPYmpG9ApgoTdZmzHDfz32YngbPpump'
const POLL_INTERVAL = 203 // ~295 requests per minute (60 seconds / 295 = ~0.203 seconds)

function TokenData() {
  const [tokenData, setTokenData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const tokenDataRef = useRef(null)

  useEffect(() => {
    tokenDataRef.current = tokenData
  }, [tokenData])

  const fetchTokenData = async () => {
    try {
      const url = `${DEXSCREENER_API}/${TOKEN_ADDRESS}`
      console.log('Fetching from URL:', url)
      
      const response = await fetch(url)
      if (!response.ok) {
        // If rate limited, don't update error state to keep showing last known value
        if (response.status === 429) {
          console.warn('Rate limit reached, keeping last known value')
          return
        }
        console.error('API response not OK:', response.status, response.statusText)
        throw new Error(`Failed to fetch token data: ${response.status}`)
      }
      const data = await response.json()
      console.log('Full API response:', data)
      console.log('Type of data:', typeof data)
      console.log('Is array?', Array.isArray(data))
      console.log('Data keys:', Object.keys(data))
      console.log('Data.pairs exists?', 'pairs' in data)
      console.log('Data length if array:', Array.isArray(data) ? data.length : 'N/A')
      
      // Check if the response itself is an array of pairs (not wrapped in a pairs property)
      if (Array.isArray(data) && data.length > 0) {
        console.log('Response is a direct array of pairs')
        const validPairs = data.filter(pair => 
          pair && (pair.liquidity?.usd || pair.priceUsd || pair.fdv)
        )
        
        if (validPairs.length > 0) {
          const bestPair = validPairs.reduce((prev, current) => 
            (current.liquidity?.usd || 0) > (prev.liquidity?.usd || 0) ? current : prev
          )
          
          console.log('Best pair data:', bestPair)
          console.log('FDV:', bestPair.fdv)
          console.log('Market Cap:', bestPair.marketCap)
          console.log('Price USD:', bestPair.priceUsd)
          console.log('Liquidity USD:', bestPair.liquidity?.usd)
          
          setTokenData(bestPair)
          setError(null)
        }
      }
      // Check if response has pairs array
      else if (data.pairs && Array.isArray(data.pairs) && data.pairs.length > 0) {
        // Filter out pairs with no liquidity or invalid data
        const validPairs = data.pairs.filter(pair => 
          pair && (pair.liquidity?.usd || pair.priceUsd || pair.fdv)
        )
        
        if (validPairs.length > 0) {
          // Get the pair with highest liquidity
          const bestPair = validPairs.reduce((prev, current) => 
            (current.liquidity?.usd || 0) > (prev.liquidity?.usd || 0) ? current : prev
          )
          
          // Log for debugging
          console.log('Best pair data:', bestPair)
          console.log('FDV:', bestPair.fdv)
          console.log('Market Cap:', bestPair.marketCap)
          console.log('Price USD:', bestPair.priceUsd)
          console.log('Liquidity USD:', bestPair.liquidity?.usd)
          
          setTokenData(bestPair)
          setError(null)
        } else {
          console.warn('No valid pairs found in response')
          // Try to use first pair even if it seems invalid
          if (data.pairs[0]) {
            console.log('Using first pair:', data.pairs[0])
            setTokenData(data.pairs[0])
          }
        }
      } else {
        console.warn('No pairs found in response. Response structure:', Object.keys(data))
        // Maybe the response structure is different - check for direct data
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          console.log('Found data array:', data.data)
          setTokenData(data.data[0])
        }
      }
    } catch (err) {
      console.error('Error fetching token data:', err)
      // Only set error if we don't have any data yet
      if (!tokenDataRef.current) {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchTokenData()

    // Set up polling
    const interval = setInterval(() => {
      fetchTokenData()
    }, POLL_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  if (loading && !tokenData) {
    return null
  }

  if (error && !tokenData) {
    return null
  }

  // Try multiple possible field names for market cap
  // DexScreener API typically returns fdv (fully diluted valuation) as the market cap
  let marketCap = 0
  let displayValue = 'Loading...'
  let displayLabel = 'Market Cap'
  let priceChange24h = null
  
  if (tokenData) {
    // Get price change percentage
    priceChange24h = tokenData.priceChange?.h24 || tokenData.priceChange24h || null
    
    // Try fdv first (most common)
    if (tokenData.fdv && typeof tokenData.fdv === 'number' && tokenData.fdv > 0) {
      marketCap = tokenData.fdv
    }
    // Try marketCap
    else if (tokenData.marketCap && typeof tokenData.marketCap === 'number' && tokenData.marketCap > 0) {
      marketCap = tokenData.marketCap
    }
    // Try calculating from price * supply if available
    else if (tokenData.priceUsd && tokenData.totalSupply) {
      const calculated = parseFloat(tokenData.priceUsd) * parseFloat(tokenData.totalSupply)
      if (calculated > 0) {
        marketCap = calculated
      }
    }
    // Try fdvUSD
    else if (tokenData.fdvUSD && typeof tokenData.fdvUSD === 'number' && tokenData.fdvUSD > 0) {
      marketCap = tokenData.fdvUSD
    }
    // Fallback to price if market cap not available
    else if (tokenData.priceUsd && parseFloat(tokenData.priceUsd) > 0) {
      displayLabel = 'Price'
      marketCap = parseFloat(tokenData.priceUsd)
    }
    // Fallback to liquidity
    else if (tokenData.liquidity?.usd && tokenData.liquidity.usd > 0) {
      displayLabel = 'Liquidity'
      marketCap = tokenData.liquidity.usd
    }
  }
  
  if (marketCap > 0) {
    displayValue = marketCap >= 1000000 
      ? `$${(marketCap / 1000000).toFixed(2)}M`
      : marketCap >= 1000
      ? `$${(marketCap / 1000).toFixed(2)}K`
      : marketCap >= 1
      ? `$${marketCap.toFixed(4)}`
      : `$${marketCap.toFixed(6)}`
  } else if (tokenData) {
    displayValue = 'N/A'
  }

  const isPositive = priceChange24h !== null && priceChange24h > 0
  const isNegative = priceChange24h !== null && priceChange24h < 0

  return (
    <div className="token-bubble">
      <div className="bubble-content">
        <span className="bubble-label">{displayLabel}</span>
        <span className="bubble-value">{displayValue}</span>
        {priceChange24h !== null && (
          <span className={`bubble-change ${isPositive ? 'positive' : isNegative ? 'negative' : ''}`}>
            {isPositive ? '+' : ''}{priceChange24h.toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  )
}

export default TokenData

