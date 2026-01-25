import React from 'react'
import { Headphones } from "lucide-react"
import Player from '../components/Player'
import Chat from '../components/Chat'

function Room() {
  return (
    <>
      <div className='flex justify-center flex-col items-center p-5 bg-[#3c5a7d]'>
        <h1 className='flex gap-3 font-bold text-3xl mb-3'>
          <span><Headphones width='40px' height='auto' /></span>
          Sync <span className='underline text-blue-600'>Music</span> Room
        </h1>
        <p>Listen together in real time</p>
      </div>
      <div className='flex gap-2 w-full h-screen bg-[#0C111E] text-white'>
        <div className="left w-1/2">
          player
        </div>
        <div className="right w-1/2">
          <div>
            <div>host</div>
            <div>connected users</div>
            <Player />
          </div>
          <div className="chat">
            <Chat />
          </div>
        </div>
      </div>
    </>
  )
}

export default Room