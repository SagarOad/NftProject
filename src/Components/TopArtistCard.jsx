import React from 'react'
import TopArtistCard1 from "../assets/Images/topArtist1.jpg";
import TopArtistCard2 from "../assets/Images/topArtist2.jpg";
import TopArtistCard3 from "../assets/Images/topArtist3.jpg";
import TopArtistCard4 from "../assets/Images/topArtist4.jpg";

const TopArtistCard = () => {
  return (
    <div>
        <div className='grid grid-rows-1 grid-flow-col'>

<div className="flex-auto m-4">
  <img className="object-cover w-[100%]" src={TopArtistCard1} />
</div>

<div className="flex-auto m-4">
  <img className="object-cover w-[100%]" src={TopArtistCard2} />
</div>


<div className="flex-auto m-4">
  <img className="object-cover w-[100%]" src={TopArtistCard3} />
</div>


<div className="flex-auto m-4">
  <img className="object-cover w-[100%]" src={TopArtistCard4} />
</div>


</div>
    </div>
  )
}

export default TopArtistCard