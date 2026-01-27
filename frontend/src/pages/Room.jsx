import React from 'react'
import { Headphones } from "lucide-react"
import Player from '../components/Player'
import Chat from '../components/Chat'
import { Crown } from 'lucide-react'
function Room() {
  const room_id ="1234";
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
        {/* right section */}
        <div className="right w-1/2 m-5 flex flex-col items-center gap-5">
          <div className='bg-[#4052674b] w-2xl flex-col items-center justify-center p-3 rounded-xl'>
            <p className='m-1.5 bg-amber-50 text-black p-1 text-center font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-xl'>Room id:{room_id}</p>
            <div className='border border-white-600 w-70 m-1.5 bg-amber-50 text-black p-1 text-center font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-xl'><Crown className='text-center '/>You are the host</div>
            <div className='border border-white-600 w-70 m-1.5 bg-amber-50 text-black p-1 text-center font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-xl'>4 user connected</div>
            <Player />
          </div>

          {/* //chat section */}
          <div className="">
            <Chat />
          </div>
        </div>
      </div>
    </>
  )
}

export default Room