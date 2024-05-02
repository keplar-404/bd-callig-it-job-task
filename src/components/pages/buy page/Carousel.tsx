"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Link from "next/link";

export default function Carousell({ headLine }: { headLine: string }) {
  return (
    <>
      <div className="w-full flex justify-between items-center mt-[67px] mb-[24px]">
        <p className="text-[32px] font-semibold ">{headLine}</p>
        <p className="text-[16px] font-semibold text-[#0059B1] underline decoration-[#0059B1] ">
          <Link href={"/search/asdf5456a5sd4f5"}>See all properties</Link>{" "}
        </p>
      </div>

      <div className=" sm:h-[83rem] lg:h-[26rem]">
        <Carousel
          indicators={false}
          leftControl={
            <Image src={"/leftControll.png"} width={68} height={68} alt="" />
          }
          rightControl={
            <Image src={"/rightControll.png"} width={68} height={68} alt="" />
          }
        >
          <div className="flex sm:flex-col lg:flex-row h-full items-center gap-4 justify-center">
            <Link href={"/635sad4f4"}>
              <Card image="/c.png" />
            </Link>
            <Link href={"/635sad4f4"}>
              <Card image="/c2.png" />
            </Link>
            <Link href={"/635sad4f4"}>
              <Card image="/c3.png" />
            </Link>
          </div>
          <div className="flex sm:flex-col lg:flex-row h-full items-center gap-4 justify-center">
            <Link href={"/635sad4f4"}>
              <Card image="/c.png" />
            </Link>
            <Link href={"/635sad4f4"}>
              <Card image="/c2.png" />
            </Link>
            <Link href={"/635sad4f4"}>
              <Card image="/c3.png" />
            </Link>
          </div>
        </Carousel>
      </div>
    </>
  );
}

const Card = ({ image }: { image: string }) => {
  return (
    <>
      <div className="sm:w-[280px] md:w-[548px] lg:w-[400px]">
        <div
          className="w-full h-[200px] flex items-end p-[1rem] cursor-pointer"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Image
            src={"/c1.png"}
            width={55}
            height={28}
            alt=""
            className="w-[55px] h-[28px]"
          />
        </div>
        <div className="bg-[#F9FAFB] p-[16px]">
          <div className="w-full flex justify-between items-center">
            <p className="p-[8px] bg-[#C5E2FF] text-[#00254A] rounded-[8px]">
              Apartment
            </p>

            <div className="flex justify-center items-center gap-2">
              <div className="w-[8px] h-[8px] bg-[#E61] rounded-[1px]"></div>
              <p className="font-semibold">Ready to Move</p>
            </div>
          </div>
          <hr className="w-full bg-[#D1D5DB] mt-2 h-[2px]" />

          <p className="text-[20px] font-semibold mt-3">SunnySlope Suites</p>
          <div className="flex items-center gap-1 mt-2">
            <Image
              src={"/location.png"}
              width={16}
              height={16}
              alt={""}
              className="w-[15px] h-[16px]"
            />
            <p className="text-[#6B7280] text-[14px]">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>

          <p className="font-bold text-[20px] mt-4">$ 250000</p>
        </div>
      </div>
    </>
  );
};
