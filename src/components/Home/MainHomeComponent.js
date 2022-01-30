import React from 'react'
import GroupDetails from './GroupDetails'
import GroupHome from './GroupHome'
import Hero from './Hero'
import Navbar from './Navbar'
import VideoCall from './VideoCall'
import VoiceHome from './VoiceHome'

function MainHomeComponent() {
  return (
    <div>
    <Navbar />
    <Hero />
    <GroupHome />
    <VoiceHome />
    <GroupDetails />
    <VideoCall />
    </div>
  )
}

export default MainHomeComponent
