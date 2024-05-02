"use client";

import Carousel from "@/components/pages/buy page/Carousel";
import CountSection from "@/components/pages/buy page/CountSection";
import Testimonial from "@/components/pages/buy page/Testimonial";
import Magnifine from "@/components/svg/Magnifine";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import data from "../../../data.json"

export default function page() {
  const [tab, setTab] = useState("buy");
  return (
    <>
      {/* 1st section */}
      <div className="w-full h-[309px] buy_page"></div>
      {/* search section */}
      <div className="w-full flex justify-center items-center mt-[-10rem] overflow-hidden">
        <div className="p-[32px] flex flex-col gap-[32px] drop-shadow-xl bg-white rounded-[8px]">
          {/* tab */}
          <div className="w-full">
            <div className="flex justify-between items-center w-[300px]">
              <button
                className={`py-[8px]  ${
                  tab === "buy" ? "border-b-[2.5px] border-[#0059B1]" : ""
                }`}
                onClick={() => setTab("buy")}
              >
                Buy
              </button>
              <button
                className={`py-[8px]  ${
                  tab === "rent" ? "border-b-[2.5px] border-[#0059B1]" : ""
                } `}
                onClick={() => setTab("rent")}
              >
                Rent
              </button>
              <button
                className={`py-[8px]  ${
                  tab === "pg" ? "border-b-[2.5px] border-[#0059B1]" : ""
                } `}
                onClick={() => setTab("pg")}
              >
                PG
              </button>
              <button
                className={`py-[8px]  ${
                  tab === "plot" ? "border-b-[2.5px] border-[#0059B1]" : ""
                } `}
                onClick={() => setTab("plot")}
              >
                Plot
              </button>
              <button
                className={`py-[8px]  ${
                  tab === "commercial"
                    ? "border-b-[2.5px] border-[#0059B1]"
                    : ""
                } `}
                onClick={() => setTab("commercial")}
              >
                Commercial
              </button>
            </div>
            <hr className="w-full h-[2.8px] mt-[-2px] bg-[#0058b16d]" />
          </div>

          {/* search */}
          <div className="sm:w-[300px] md:w-[748px] lg:w-[920px] border-[2px] rounded-[4px] py-[0.6rem] px-[1rem] flex">
            <span>
              <Magnifine color={"#6B7280"} />
            </span>
            <input
              type="text"
              className="ml-3 w-full focus:outline-none outline-0"
              placeholder="Search properties"
            />
          </div>

          {/* select  */}
          <div className="flex sm:flex-col md:flex-row justify-center gap-4  items-center w-full">
            {/* 1st select */}
            <div className="w-full">
              <p className="text-[16px] font-semibold flex mb-3  items-center gap-2">
                <span>
                  <Image src={"/location.png"} alt="" width={16} height={20} />
                </span>{" "}
                Your Location
              </p>

              <div className="w-full">
                <select
                  name="location"
                  id="location"
                  defaultValue={""}
                  className="w-full h-[48px] bg-[#ECF5FF] rounded-[4px] border-none "
                >
                  <option value="" disabled className="hidden"></option>
                  <option value="all">All</option>
              {data.map((item, index) => (
                <option key={index} value={item.location}>
                  {item.location}
                </option>
              ))}
                  
                </select>
              </div>
            </div>

            {/* 2nd select */}
            <div className="w-full">
              <p className="text-[16px] font-semibold flex  items-center mb-3 gap-2">
                <span>
                  <Image src={"/home.png"} alt="" width={16} height={20} />
                </span>{" "}
                Property Type
              </p>

              <div className="w-full">
                <select
                  name="location"
                  id="location"
                  defaultValue={""}
                  className="w-full h-[48px] bg-[#ECF5FF] rounded-[4px] border-none"
                >
                  <option value="" disabled className="hidden"></option>
                  <option value="all">All</option>
                  <option value="newproject">New project</option>
                  <option value="prelunch">Pre Lunch</option>
                  
                </select>
              </div>
            </div>

            {/* 3rd select */}
            <div className="w-full">
              <p className="text-[16px] font-semibold flex mb-3 items-center gap-2">
                <span>
                  <Image src={"/money.png"} alt="" width={16} height={20} />
                </span>
                Budget
              </p>

              <div className="w-full">
                <input
                  type="number"
                  className="bg-[#ECF5FF] p-[0.7rem] rounded-[4px] w-full "
                />
                {/* <input type="number" name="number" id="number" className="bg-[#ECF5FF] p-[0.7rem] rounded-[4px]" /> */}
              </div>
            </div>
          </div>

          {/* search button */}
          <Link href={'/search/24asdf'} className="w-full">
          <ButtonWithIcon
            buttonColor={"#0059b1"}
            iconColor={"white"}
            otherClass={"text-white font-semibold w-full"}
            text={"Find Property"}
            />
            </Link>
        </div>
      </div>

      {/* 2nd section */}
      <div className="w-full flex justify-center items-center">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]">
          <CountSection />
          <Carousel headLine="Popular Properties" />
          <hr className="w-full h-[2px] bg-[#E3E3E3] mt-[32px] mb-[45px]" />
          <Carousel headLine="New Listed Properties" />

          <Testimonial />
        </div>
      </div>
    </>
  );
}
