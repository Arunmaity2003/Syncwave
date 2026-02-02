import React from 'react'
import { Headphones } from "lucide-react"
import Player from '../components/Player'
import Chat from '../components/Chat'
import { Crown } from 'lucide-react'

function Room() {
  const room_id = "1234";
  return (
    <>
      <div className='flex justify-center flex-col items-center p-5 bg-[#3c5a7d]'>
        <h1 className='flex gap-3 font-bold text-3xl mb-3'>
          <span><Headphones width='40px' height='auto' /></span>
          Sync <span className='underline text-blue-500'>Music</span> Room
        </h1>
        <p>Listen together in real time</p>
      </div>
      <div className='flex gap-2 w-full h-screen bg-[#0C111E] text-white'>
        {/* left section */}
        <div className="left w-2/3 flex">
          <div className='m-10 bg-gray-900 p-4 flex border-amber-400 w-full h-100 items-center justify-center rounded-xl'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SvFXHwclqdo?si=G5X5Jr7g-pvsF4BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>



        {/* right section */}
        <div className="right w-1/3 m-5 flex flex-col items-center gap-5">
          <div className='bg-[#4052674b] w-full flex-col items-center justify-center p-3 rounded-xl h-80'>
            <p className='m-1.5 p-1 text-center text-white font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-2xl'>Room id:{room_id}</p>
            <div className='w-full h-px bg-white'></div>
            {/* //mid 2 section */}

            <div className='flex flex-col items-center p-2'>
              <div className='border border-white-600 w-70 m-1.5 bg-amber-50 text-black p-1 text-center font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-xl'><Crown className='text-center ' />You are the host</div>
              <div className='border border-white-600 w-70 m-1.5 bg-amber-50 text-black p-1 text-center font-bold font-serif rounded-sm flex items-center gap-5 justify-center text-xl'>4 user connected</div>
            </div>

            {/* //player section */}
            <Player />
          </div>

          {/* //chat section */}
          <div className="bg-[#4052674b] w-full rounded-2xl">
            <Chat />
          </div>
        </div>
      </div>
    </>
  )
}

export default Room