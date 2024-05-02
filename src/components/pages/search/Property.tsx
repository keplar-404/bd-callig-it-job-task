import Button from "@/components/ui/Button";
import Devider from "@/components/ui/Devider";
import Image from "next/image";
import React from "react";

export default function Property() {
  return (
    <>
      <div className="bg-[#F9FAFB] p-[24px] flex flex-wrap gap-[32px]">
        <Image
          src={"/pro.png"}
          width={280}
          height={200}
          alt=""
          className="w-[152] h-[184]"
        />

        <div>
          <div className="flex flex-wrap gap-[10px]">
            <div>
              <p className="text-[18px] font-semibold">
                3 BHK Builder Floor for Sale in Site Ram Bazar <br /> New Delhi
              </p>
              <p className="text-[16px] font-semibold flex mb-3  items-center gap-2 text-[#606060] mt-[16px]">
                <span>
                  <Image src={"/location.png"} alt="" width={16} height={20} />
                </span>{" "}
                Meadowshire Park, Greenfield, USA
              </p>
            </div>
            <div>
              <p className="text-[24px] font-bold">$ 300000</p>
              <Button className="border-[1px] border-black mt-4">
                Bid Property
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap w-full justify-between items-center mt-4">
              <p className="text-[13px] font-medium">Property details</p>
              <Devider className="w-[75%] bg-[#E3E3E3]" />
            </div>

            <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-4">
              <div className="flex gap-3 ">
                <Image
                  src={"/pro1.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="w-auto h-[42px]"
                />
                <p>
                  <span className="text-[16px] font-medium">Total Area</span>{" "}
                  <br />{" "}
                  <span className="text-[14px] text-[#535353]">891 sqft</span>
                </p>
              </div>

              <div className="flex gap-3 ">
                <Image
                  src={"/pro2.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="w-auto h-[42px]"
                />
                <p>
                  <span className="text-[16px] font-medium">Status</span> <br />{" "}
                  <span className="text-[14px] text-[#535353]">
                    Ready to move
                  </span>
                </p>
              </div>

              <div className="flex gap-3 ">
                <Image
                  src={"/pro3.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="w-auto h-[42px]"
                />
                <p>
                  <span className="text-[16px] font-medium">Total Area</span>{" "}
                  <br />{" "}
                  <span className="text-[14px] text-[#535353]">891 sqft</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
