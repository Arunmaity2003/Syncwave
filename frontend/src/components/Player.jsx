import React from 'react'
import './player.css'
function Player() {
  return (
    <div className='controls'>
      <button className="btn play">▶ Play</button>
      <button className="btn pause">⏸ Pause</button>
      <button className="btn sync">🔗 Sync</button>

    </div>
  )
}

export default Player