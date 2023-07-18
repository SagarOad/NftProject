import React from "react";
import NftCard1 from "../assets/Images/Capture.jpg";
import NftCard2 from "../assets/Images/Capture2.jpg";
import NftCard3 from "../assets/Images/Capture3.jpg";
import NftCard4 from "../assets/Images/Capture4.jpg";
import NftCard5 from "../assets/Images/Capture5.jpg";
import NftCard6 from "../assets/Images/Capture6.jpg";

const NfrCard = (props) => {
  return (

 <div className='grid grid-rows-2 grid-flow-col'>

    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard1} />
    </div>

    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard2} />
    </div>


    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard3} />
    </div>


    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard4} />
    </div>


    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard5} />
    </div>


    <div className="flex-auto m-4">
      <img className="object-cover w-[100%]" src={NftCard6} />
    </div>


    </div>
  );
};

export default NfrCard;
