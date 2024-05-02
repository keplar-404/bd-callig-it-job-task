import Image from "next/image";
import React from "react";

export default function Left() {
  return (
    <>
      <hr className="w-full h-[2px] bg-[#E3E3E3] my-[16px]" />

      <Image
        src={"/p.png"}
        width={1440}
        height={3337}
        alt=""
        className="w-full h-auto"
      />

      <div className="flex justify-between items-center w-full gap-4 mt-4">
        <Image
          src={"/p1.png"}
          width={300}
          height={300}
          alt=""
          className="w-full  sm:h-[85px] md:h-[140px] "
        />
        <Image
          src={"/p2.png"}
          width={300}
          height={300}
          alt=""
          className="w-full  sm:h-[85px] md:h-[140px] "
        />

        <div
          className="w-full sm:h-[85px] md:h-[140px] flex justify-center items-center"
          style={{
            backgroundImage: "url('/p3.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-white sm:text-[12px] md:text-[18px] font-semibold ">
            View more
          </p>
        </div>
      </div>

      <div className="mt-6 w-full p-[24px] bg-[#f3f4f6] border rounded-lg">
        <p className="text-[22px] font-semibold">Overview</p>

        <div className="w-full bg-white flex justify-between items-center border-b-[2px] border-[#CAC7C7] p-[16px] my-[32px]">
          <div className="flex sm:flex-col md:flex-row gap-2 justify-center items-center">
            <Image src={"/p4.svg"} width={20} height={20} alt={""} />
            <p className="sm:text-center md:text-left sm:text-[10px] md:text-[16px]">
              <span className="font-semibold">2</span> Beds
            </p>
          </div>

          <div className="flex sm:flex-col md:flex-row gap-2 justify-center items-center">
            <Image src={"/p5.svg"} width={20} height={20} alt={""} />
            <p className="sm:text-center md:text-left sm:text-[10px] md:text-[16px]">
              <span className="font-semibold">2</span> Bath
            </p>
          </div>

          <div className="flex sm:flex-col md:flex-row gap-2 justify-center items-center">
            <Image src={"/p6.svg"} width={20} height={20} alt={""} />
            <p className="sm:text-center md:text-left sm:text-[10px] md:text-[16px]">
              <span className="font-semibold">2</span> Balcony
            </p>
          </div>

          <div className="flex sm:flex-col md:flex-row gap-2 justify-center items-center">
            <Image src={"/p7.svg"} width={20} height={20} alt={""} />
            <p className="sm:text-center md:text-left sm:text-[10px] md:text-[16px]">
              <span className="font-semibold">2</span> Fully Furnished
            </p>
          </div>
        </div>


<div className="w-full flex flex-wrap gap-4 justify-between items-center">


    <div>
<p className="text-[#5C5C5C] ">Carpet Area</p>
<p className="font-medium">2000 sqft</p>
<p className="text-[14px] text-[#535353]">$ 225/sqft</p>
<p className="text-[14px] text-[#535353] mt-[24px]">Facing</p>
<p className="font-semibold">North - East</p>
    </div>


    <div>
<p className="text-[#5C5C5C] ">Floor</p>
<p className="font-medium">Second (Out of 6th floor)</p>
<p className="text-[14px] text-[#535353] mt-[34px]">Additional Rooms</p>
<p className="">1 servant room & 1 gust room</p>

    </div>

    <div>
<p className="text-[#5C5C5C] ">Transaction Type</p>
<p className="font-medium">Ready to move</p>
<p className="text-[14px] text-[#535353] mt-[38px]">Age of construction</p>
<p className="">New Construction</p>

    </div>


    <div className="md:mb-[87px] sm:mb-0 ">
<p className="text-[#5C5C5C] ">Lift</p>
<p className="font-medium">1</p>


    </div>


</div>


      </div>
    </>
  );
}
