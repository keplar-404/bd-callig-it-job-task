'use client'
import Image from "next/image";
import React from "react";
import toast from 'react-hot-toast';
export default function Right() {
  return (
    <>
      <div className="w-full  p-[24px] bg-[#ECF5FF] mt-[2rem]">
        <p className="text-[#6B7280]">property value</p>
        <p className="mt-1 text-[24px] font-bold">$ 300k - $ 310k</p>
        <p className="mt-[1rem] text-[#6B7280] font-medium">
          Your bid can not be than 10% of the property Minimum value.
        </p>

        <p className="text-[14px] mt-[32px] mb-[4px]">Min</p>
        <div className="w-full border-[2px] rounded-[4px] py-[0.6rem] px-[1rem] flex bg-white">
          <span className="">$</span>
          <input
            type="text"
            className="ml-3 w-full focus:outline-none outline-0"
            placeholder="280k"
          />
        </div>

        <p className="text-[14px] mt-[8px] mb-[4px]">Max</p>
        <div className="w-full border-[2px] rounded-[4px] py-[0.6rem] px-[1rem] flex bg-white">
          <span className="">$</span>
          <input
            type="text"
            className="ml-3 w-full focus:outline-none outline-0"
            placeholder="305k"
          />
        </div>

        <input
          type="range"
          className="w-full mt-[24px]"
          min={0}
          max={100}
          defaultValue={0}
        />
        <div className="w-full flex justify-between items-center mt-3">
          <p>$ 280k</p>
          <p>$ 305k</p>
        </div>

        <div className="flex w-full justify-center items-center mt-3">
          <button className="btn bg-[#0059B1] text-white font-semibold" onClick={()=> toast.success('Property Bidded')} >
           
            Bid Property
          </button>
        </div>
      </div>

      <Image
        src={"/map.png"}
        width={384}
        height={422}
        alt=""
        className="w-full sm:h-[24rem] lg:h-[18rem] xl:h-[24rem] mt-4"
      />
    </>
  );
}
