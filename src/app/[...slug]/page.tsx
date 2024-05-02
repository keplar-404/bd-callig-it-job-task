import OtherServices from "@/components/pages/OtherServices";
import Carousell from "@/components/pages/buy page/Carousel";
import Allservices from "@/components/pages/propertyDetails/Allservices";
import Left from "@/components/pages/propertyDetails/Left";
import Right from "@/components/pages/propertyDetails/Right";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-[2rem]">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]">
          <p className="font-semibold text-[20px]">
            3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad{" "}
            <span
              className="text-[28px] font-extrabold ml-[5rem]
"
            >
              $ 300K
            </span>{" "}
          </p>
          <p className="text-[16px] font-semibold flex mb-3  items-center gap-2 text-[#606060]">
            <span>
              <Image src={"/location.png"} alt="" width={16} height={20} />
            </span>{" "}
            Meadowshire Park, Greenfield, USA
          </p>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-1 lg:col-span-2">
              <Left />
            </div>

            <div className="sm:col-span-1">
              <Right />
            </div>
          </div>

          <Allservices />

          <OtherServices />

          <Carousell headLine="Others Nearby Properties" />

          <hr className="w-full mt-[32px] bg-[#E3E3E3] h-[2px] mb-[77px]" />
        </div>
      </div>
    </>
  );
}


