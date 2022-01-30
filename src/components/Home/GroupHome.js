import React from 'react'

function GroupHome() {
  return (
    <section className='flex justify-between items-center px-28 py-28 gap-28'>
    <div className=''>
      <img src="/images/grouphome.svg" alt="" />
    </div>   
    <div className='w-2/4'>
      <h1 className='text-5xl font-bold font-monts'>Create an invite-only place where you belong</h1>
      <p className='pt-8 font-monts w-3/4 text-lg'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
    </div>   
    </section>
  )
}

export default GroupHome
