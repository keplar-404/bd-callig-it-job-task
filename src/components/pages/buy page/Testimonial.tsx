import Image from "next/image";
import { Carousel } from "flowbite-react";
export default function Testimonial() {
  return (
    <>
    <div className="my-[5rem]">

      <p className="text-[40px] font-bold text-center mt-[64px]">
        Testimonials
      </p>
      <div className="sm:h-[70rem] lg:h-[33rem]">
        <Carousel leftControl="." rightControl=".">
          <div className="w-full flex sm:flex-col lg:flex-row justify-between items-center gap-4">
            <Card image="/people.png" />
            <Card image="/people2.png" />
          </div>
          <div className="w-full flex sm:flex-col lg:flex-row justify-between items-center gap-4">
            <Card image="/people.png" />
            <Card image="/people2.png" />
          </div>
          <div className="w-full flex sm:flex-col lg:flex-row justify-between items-center gap-4">
            <Card image="/people.png" />
            <Card image="/people2.png" />
          </div>
        </Carousel>
      </div>
</div>
    </>
  );
}

const Card = ({ image }: { image: string }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-[32px] bg-[#ECF5FF] w-full">
        <Image src={"/star.png"} width={192} height={32} alt="" />
        <p className="text-[17px] leading-[23px] text-[#818181] text-center my-[35px]">
          "The level of security provided by CypherPlay is <br /> unmatched. I
          feel confident using my card for both <br /> everyday purchases and
          travel. It's the peace of mind <br /> I was looking for."
        </p>

        <Image src={image} width={68} height={68} alt="" />
        <p className="text-[20px] font-semibold mt-[4px]">Tony Stark</p>
        <p className="text-[16px] font-normal mt-[4px] text-[#6B7280]">
          Marketing manager, XYZ
        </p>
      </div>
    </>
  );
};
