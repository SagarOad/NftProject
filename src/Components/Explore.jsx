import React from 'react'
import ExploreTabs from './ExploreTabs'

const Explore = () => {
  return (
    <div className='px-36 bg-[#efefef]'>
      <div className="text-center text-[] mt-36">
        <h1 className="text-[65px] font-[700] text-[#0d0d0d]">
          Explore Marketplace.
        </h1>
        <p className="text-xl py-6">
         Various kinds of best NFTs categories.
        </p>
      </div>

      <ExploreTabs />
    </div>
  )
}

export default Explore
