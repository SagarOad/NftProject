import React from 'react'
import Explore from '../Components/Explore'
import Header from '../Components/Header'
import MainBanner from '../Components/MainBanner'
import NftCard from '../Components/NftCard'
import Sponsors from '../Components/Sponsors'
import Subscribers from '../Components/Subscribers'
import TopArtist from '../Components/TopArtist'
import Trending from '../Components/Trending'

const Home = () => {
  return (
    <div className='bg-[#efefef] h-[auto]'>
      
    <Header />
    <MainBanner />
    <Sponsors />
    <Trending />
    <Explore />
    <TopArtist />
    <Subscribers />
    </div>
  )
}

export default Home
