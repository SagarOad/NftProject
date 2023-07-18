import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import SubscribersImg from "../assets/Images/subscribersImg.jpg";
import { Button } from "@material-tailwind/react"

const Subscribers = () => {
  return (
    <div className='flex px-36 flex-wrap mt-24 pb-6'> 

      <div className='flex-1 items-center mt-5'>
        <img className='mr-[auto]' src={SubscribersImg}></img>
      </div>


      <div className='flex-1 pt-10 pb-10'>
        <h1 className='text-[64px] text-[#0d0d0d] font-[700] pb-8 leading-[74px]'>Discover Best Digital Arts and Collect NFTs.</h1>
        <p className='text-xl pb-4'>
          Various trending NFT news will be reset every week.
          Don't miss the best news every week!  
        </p>

        <div className='flex pt-8'>
            <div className='bg-[#121212] rounded-[22px] px-2 py-2'>
         <input className='bg-[#121212] rounded-lg text-[16px] p-4 text-[white]' placeholder='Type your email here' type={Text} />
          <button className='inputBtn px-6 rounded-[12px] py-3'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribers