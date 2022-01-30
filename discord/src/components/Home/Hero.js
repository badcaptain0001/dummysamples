import React from 'react'

function Hero() {
  return (
    <div class="relative overflow-hidden">
  <img src="/images/hero.png" alt="Avatar" class="object-cover w-full h-full" />
  <div class="absolute w-full py-2.5 bottom-2/4 inset-x-0 text-white text-center leading-4">
    <h1 className='text-6xl font-bold font-monts'>IMAGINE A PLACE...</h1>
    <p className='w-3/6 m-auto mt-8 font-monts text-lg'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
  </div>
</div>
  )
}

export default Hero
