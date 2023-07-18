import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import banner from "../../public/banner.png";
import { Button } from "@material-tailwind/react"

const MainBanner = () => {
  return (
    <div className='flex px-36 flex-wrap mt-16 pb-6'> 
      <div className='flex-1 pt-10 pb-10'>
        <h1 className='text-[83px] text-[#0d0d0d] font-[700] pb-8 leading-[95px]'>Discover Best Digital Arts and Collect NFTs.</h1>
        <p className='text-xl pb-4'>Discover NFTs category, track the latest drops, and follow the collections
          you love. Enjoy it!
        </p>

        <div className='flex pt-8'>
          <Button className='bg-[#000000] text-white text-xl py-3 px-6 rounded-xl text-[#f6e900]'>Let's Explore</Button>
          <button className='font-bold flex justify-center text-xl items-center ml-7'><span className='bg-[#0d0d0d] p-3 rounded-[100%] mr-3'><BsFillPlayCircleFill className='text-[25px] text-[#f6e900]' /></span> See Entites History</button>
        </div>
      </div>

      <div className='flex-1 items-center mt-5'>
        <img className='ml-[auto]' src={banner}></img>
      </div>
    </div>
  )
}

export default MainBanner
