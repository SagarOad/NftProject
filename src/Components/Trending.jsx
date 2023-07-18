import { Button } from "@material-tailwind/react";
import React from "react";
import nft1 from "../../public/nft1.png";
import user1 from "../../public/user1.png";

const Trending = () => {
  return (
    <div className="px-36">
      <div className="text-center text-[] mt-32">
        <h1 className="text-[65px] font-[700] text-[#0d0d0d]">
          Hot Trending On This Week.
        </h1>
        <p className="text-xl py-6">
          Various kinds of NFTs that are trending and trend will be reset every
          week.
          <br />
          Don't miss out on the best NFTs every week
        </p>
      </div>

      <div className="flex flex-wrap p-12 rounded-[50px] bg-[#e4e4e4] items-center">
        <div className="flex-1">
          <img src={nft1}></img>
        </div>

        <div className="flex-1 p-16">
          <span className="text-lg font-[600] text-[#1b1b1b]">Feb 16, 2022, 15:01 PM</span>
          <h1 className="text-[45px] font-bold mb-3">Cool Lucas Andrade</h1>
          <p className="text-xl">
            We are a community based collection project featuring 3d artwork. 3D
            Cool Lucas Andrase comes of evil shapes, traits, and sizes with a
            few surprises along the way.
          </p>

          <div className="w-[70%] mt-12">
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap items-center">
                <div>
                <img src={user1} className="w-[65px] mr-2"></img>
                </div>
                <div>
                  <p>Owner</p>
                  <span className="text-[18px] font-[600]">Marco_Simic</span>
                </div>
              </div>
              <Button className="bg-[transparent] rounded-[50px] border-2 border-black text-black">
                View Artwork
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
