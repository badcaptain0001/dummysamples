import React from 'react'

function VideoCall() {
  return (
    <div className='bg-stone-200 py-28 px-28'>
      <div className='font-monts text-center'>
        <h1 className='text-6xl font-bold'>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p className='text-lg mt-16'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
      </div>
      <img className='m-auto w-full object-cover' src="/images/GroupVideo.svg" alt="" />
      <h1 className='mt-48 text-3xl font-monts font-bold text-center'>Ready to start your journey?</h1>
      <div className='flex justify-center mt-16'>
      <button className='bg-parent-400 py-5 px-20 rounded-full text-white font-monts hover:bg-parent-700 hover:font-semibold active:transition-all'>Download for Mac</button>
      </div>
    </div>
  )
}

export default VideoCall
