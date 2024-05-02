import React from 'react'

export default function OtherServices() {
  return (
    <>
    
    <p className="sm:text-[32px] md:text-[48px] font-bold text-center mt-[120px] ]">
            Other Services
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[35px] mt-[64px] mb-[25px]">
            {/* 5th section 1st div */}
            <div className="flex  w-[300px] p-[14px] gap-[12px] rounded bg-[#ECF5FF]">
              <img src="/3rd1.png" alt="" className="w-[45px] h-[45px] mt-1" />

              <div>
                <p className="text-[18px] font-semibold">
                  Advanced Property <br /> Search
                </p>
                <p className="text-[#6B7280] font-medium mt-[14px]">
                  Effortlessly find your dream property with advanced search
                  filters.
                </p>
              </div>
            </div>
            {/* 5th section 1st div */}
            <div className="flex  w-[300px] p-[14px] gap-[12px] rounded bg-[#ECF5FF]">
              <img src="/3rd1.png" alt="" className="w-[45px] h-[45px] mt-1" />

              <div>
                <p className="text-[18px] font-semibold">
                  Virtual Tours and Multimedia
                </p>
                <p className="text-[#6B7280] font-medium mt-[14px]">
                  Explore properties through immersive virtual tours and HD
                  photos.
                </p>
              </div>
            </div>
            {/* 5th section 1st div */}
            <div className="flex  w-[300px] p-[14px] gap-[12px] rounded bg-[#ECF5FF]">
              <img src="/3rd1.png" alt="" className="w-[45px] h-[45px] mt-1" />

              <div>
                <p className="text-[18px] font-semibold">
                  Secure Online Transactions
                </p>
                <p className="text-[#6B7280] font-medium mt-[14px]">
                  Ensure secure transactions and e-sign documents seamlessly
                  online
                </p>
              </div>
            </div>
          </div>
    </>
  )
}
