import React from 'react'
import metamast from "../../public/metamast.png";
import bcs from "../../public/bcs.png";


const Sponsors = () => {
  return (
    <div className='flex justify-center px-36 items-center pt-8'>
        <img src={metamast} className="w-[260px] m-10"></img>   
        <img src={bcs} className="w-[260px] m-10"></img>     
    </div>
  )
}

export default Sponsors
