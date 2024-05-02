import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CountSection() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-[60px] gap-4">
        {/* 1st card */}
        <div className="p-[24px] w-[285px] bg-[#FDF0E7]">
          <p className="text-[#D95D0F] text-[30px] font-bold">2k+</p>
          <p>New Flat Listed</p>

          <div className="mt-[28px] flex justify-between items-center">
            <Link href={"/search/635sad4f4"}>
            <p className="text-[#E61] underline">View all</p>
            </Link>
            <Image src={"/roundArrowDown.svg"} width={32} height={32} alt="" />
          </div>
        </div>

        {/* 2nd card */}
        <div className="p-[24px] w-[285px] bg-[#ECF5FF]">
          <p className="text-[#0051A1] text-[30px] font-bold">2k+</p>
          <p>New Flat Listed</p>

          <div className="mt-[28px] flex justify-between items-center">
          <Link href={"/search/635sad4f4"}>
            <p className="text-[#0059B1] underline">View all</p>
          </Link>
            <Image src={"/roundArrowDown2.svg"} width={32} height={32} alt="" />
          </div>
        </div>

        {/* 3rd card */}
        <div className="p-[24px] w-[285px] bg-[#FDF0E7]">
          <p className="text-[#D95D0F] text-[30px] font-bold">2k+</p>
          <p>New Flat Listed</p>

          <div className="mt-[28px] flex justify-between items-center">
          <Link href={"/search/635sad4f4"}>
            <p className="text-[#E61] underline">View all</p>
          </Link>
            <Image src={"/roundArrowDown.svg"} width={32} height={32} alt="" />
          </div>
        </div>

        {/* 4th card */}
        <div className="p-[24px] w-[285px] bg-[#ECF5FF]">
          <p className="text-[#0051A1] text-[30px] font-bold">2k+</p>
          <p>New Flat Listed</p>

          <div className="mt-[28px] flex justify-between items-center">
            <Link href={"/search/635sad4f4"}>
            <p className="text-[#0059B1] underline">View all</p>
            </Link>
            <Image src={"/roundArrowDown2.svg"} width={32} height={32} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
