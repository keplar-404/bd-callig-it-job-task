import Image from "next/image";
import React from "react";

export default function Footer() {
  const services = [
    {
      head: "Product",
      services: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      head: "Company",
      services: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      head: "Resources",
      services: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      head: "Social",
      services: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      head: "Legal",
      services: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center pt-[64px] pb-[48px] bg-[#ECF5FF]">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]">
          {/* 1st section */}
          <div className="w-full flex flex-wrap justify-center items-center  gap-[6rem] ">
            {/* footer logo section */}
            <div className="mr-[32px] flex flex-col sm:justify-center sm:items-center md:justify-normal md:items-start">
              <Image src={"/logo.png"} width={53} height={80} alt="logo" />
              <p className="text-[#475467] text-[16px] font-medium mt-4 sm:text-center md:text-left">
                Design amazing digital experiences <br /> that create more happy
                in the world.
              </p>
            </div>

            {/* services section */}

            {services.map((data, index) => (
              <Services key={index} head={data.head} services={data.services} />
            ))}
          </div>

          {/* devider */}
          <hr className="w-full h-[1.5px] mt-[64px] bg-[#C5E2FF]" />
          {/* 2nd section */}
          <div className="w-full flex justify-between items-center flex-wrap mt-[32px]">
            <p className="text-[#667085] text-[16px] ">
              &copy; 2024 Heritage- Nest . All rights reserved.
            </p>

            <div className="flex flex-wrap gap-[24px] ">
              <Image
                src={"/twitter.svg"}
                height={24}
                width={24}
                alt="twitter"
              />
              <Image
                src={"/linkedin.svg"}
                height={24}
                width={24}
                alt="twitter"
              />
              <Image
                src={"/facebook.svg"}
                height={24}
                width={24}
                alt="twitter"
              />
              <Image src={"/social.svg"} height={24} width={24} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Services = ({ head, services }: { head: string; services: string[] }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="text-[#667085] font-semibold text-[14px]">{head}</p>

      {services.map((data, index) => (
        <p key={index} className="text-[#475467] font-semibold">
          {data}
        </p>
      ))}
    </div>
  );
};
