"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

export default function Carousell({ headLine }: { headLine: string }) {
  return (
    <>
      <div className="w-full flex justify-between items-center mt-[67px] mb-[24px]">
        <p className="text-[32px] font-semibold ">{headLine}</p>
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
            <Card image="/a1.png" />
            <Card image="/a2.png" />
            <Card image="/a3.png" />
          </div>
          <div className="flex sm:flex-col lg:flex-row h-full items-center gap-4 justify-center">
            <Card image="/a1.png" />
            <Card image="/a2.png" />
            <Card image="/a3.png" />
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
          className="w-full h-[417px] flex items-end p-[1rem] cursor-pointer"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
};
