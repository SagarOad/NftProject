import React from 'react'
import TopArtistTabs from './TopArtistTabs'

const TopArtist = () => {
  return (
    <div className='px-36'>
        <div className="text-center text-[] mt-36">
        <h1 className="text-[65px] mb-6 font-[700] text-[#0d0d0d]">
          Top List Artist
        </h1>
         <TopArtistTabs />
      </div>
    </div>
  )
}

export default TopArtist