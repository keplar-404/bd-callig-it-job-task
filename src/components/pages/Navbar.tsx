"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center items-center py-4 bg-[#ECF5FF] shadow-xl ">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px] flex justify-between items-center">
          <div className="flex gap-[32px] sm:hidden md:flex">
            <Link href={"/buy"}>Buy</Link>
            <Link href={"/buy"}>Sell</Link>
            <p className="cursor-not-allowed">Services</p>
          </div>

          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={53}
              height={80}
              alt="logo"
              className="sm:w-[39px] sm:h-[60px] md:w-[43px] md:h-[70px]"
            />
          </Link>

          <div className="flex gap-[32px] sm:hidden md:flex">
            <p className="cursor-not-allowed">Manage Rentals</p>
            <Link href={"/about"}>
              <p>About</p>
            </Link>
            <p className="font-semibold cursor-not-allowed">Sign In </p>
          </div>

          {/* hamber menu for mobile */}
          <div
            className="flex flex-col gap-1 cursor-pointer sm:flex md:hidden"
            onClick={() => setOpen(!open)}
          >
            <div className="w-[25px] h-1 bg-black rounded-full"></div>
            <div className="w-[25px] h-1 bg-black rounded-full"></div>
            <div className="w-[25px] h-1 bg-black rounded-full"></div>
          </div>
        </div>
      </div>

      {open && (
        <div className=" w-full h-screen bg-[#ECF5FF] top-0 fixed flex justify-center items-center flex-col gap-4 z-[100]">
          <Link href={"/buy"}>Buy</Link>
          <p>Sell</p>
          <p>Services</p>
          <p>Manage Rentals</p>
          <p className="font-semibold">Sign In </p>

          <div
            className="flex flex-col  cursor-pointer mt-8"
            onClick={() => setOpen(!open)}
          >
            <div className="w-[35px] rotate-45 h-1 bg-black rounded-full"></div>
            <div className="w-[35px] mt-[-4px] -rotate-45 h-1 bg-black rounded-full"></div>
          </div>
        </div>
      )}
    </>
  );
}
