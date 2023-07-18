import React from 'react'
import Logo from "../../public/logo.png" 

const Header = () => {
  return (
    <div className='px-36 flex justify-between items-center py-5'>
    <img src={Logo}  className="w-[250px]"/>
    
  <div>
    <ul className='flex items-center'>
      <li className='ml-12 font-bold text-[#0d0d0d]'><a className='text-xl'>Explore</a></li>
      <li className='ml-12 font-bold text-[#666666]'><a className='text-xl'>Community</a></li>
      <li className='ml-12 font-bold text-[#666666]'><a className='text-xl'>Collections</a></li>
      <li className='ml-12 font-bold text-[#666666]'><a className='text-xl'>Blogs</a></li>
    </ul>
  </div>
      
    </div>
  )
}

export default Header
