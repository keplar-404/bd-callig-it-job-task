import Image from "next/image";
import React from "react";

export default function Allservices() {
  const services1 = [
    {
      image: "/s1.png",
      title: "Power Back Up",
    },
    {
      image: "/s2.png",
      title: "Park",
    },
    {
      image: "/s3.png",
      title: "Private Terrace/Garden",
    },
    {
      image: "/s4.png",
      title: "Intercom Facility",
    },
    {
      image: "/s5.png",
      title: "Internet/Wi-Fi Connectivity",
    },
    {
      image: "/s6.png",
      title: "Outdoor Tennis Courts",
    },
  ];



   const services2 = [
    {
        image: "/s7.png",
        title: "Lift",
    },
    {
        image: "/s8.png",
        title: "Reserved Parking",
    },
    {
        image: "/s9.png",
        title: "Vaastu Compliant",
    },
    {
        image: "/s10.png",
        title: "Maintenance Staff",
    },
    {
        image: "/s11.png",
        title: "DTH Television Facility",
    },
    {
        image: "/s12.png",
        title: "Early Learning Centre",
    }
   ]




const services3 = [
    {
        image: "/s13.png",
        title: "Club House",
    },
    {
        image: "/s14.png",
        title: "Security",
    },
    {
        image: "/s15.png",
        title: "Service/Goods Lift",
    },
    {
        image: "/s16.png",
        title: "Waste Disposal",
    },
    {
        image: "/s17.png",
        title: "Piped Gas",
    },
    {
        image: "/s18.png",
        title: "Kids Play Area",
    }
]




const services4 = [
    {
        image: "/s19.png",
        title: "Gymnasium",
    },
    {
        image: "/s20.png",
        title: "Water Storage",
    },
    {
        image: "/s21.png",
        title: "Visitor Parking",
    },
    {
        image: "/s22.png",
        title: "Laundry Service",
    },
    {
        image: "/s23.png",
        title: "Jogging and Strolling Track",
    },
    {
        image: "/s24.png",
        title: "Indoor Squash & Badminton Courts",
    }
]


  return (
    <>
      <div className="bg-[#f3f4f6] rounded-[8px] p-[24px] w-full mt-[62px]">
        <p className="text-[24px] font-semibold mb-[32px]">Amenities</p>

        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* 1st div */}
          <div className="flex flex-col gap-[48px]">
            {services1.map((data, index) => (
              <Service image={data.image} title={data.title} />
            ))}
          </div>



 {/* 2nd div */}
 <div className="flex flex-col gap-[48px]">
            {services2.map((data, index) => (
              <Service image={data.image} title={data.title} />
            ))}
          </div>


 {/* 3rd div */}
 <div className="flex flex-col gap-[48px]">
            {services3.map((data, index) => (
              <Service image={data.image} title={data.title} />
            ))}
          </div>

 {/* 4th div */}
 <div className="flex flex-col gap-[48px]">
            {services4.map((data, index) => (
              <Service image={data.image} title={data.title} />
            ))}
          </div>



        </div>
      </div>
    </>
  );
}

const Service = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={image} width={40} height={40} alt="" />
      <p>{title}</p>
    </div>
  );
};
