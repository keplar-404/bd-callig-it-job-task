import CountSection from "@/components/pages/buy page/CountSection";
import Carousell from "@/components/pages/about/Carousel";
import Devider from "@/components/ui/Devider";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Testimonial from "@/components/pages/buy page/Testimonial";

export default function page() {
  return (
    <>
      <div
        className="w-full sm:h-[220px] md:h-[320px]"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: "url('/about.png')",
        }}
      ></div>

      <div className="w-full flex justify-center items-center">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]">
          <CountSection />

          {/* benefit section 1 */}
          <div className="w-full  sm:flex sm:justify-center sm:items-center lg:block lg:justify-normal lg:items-start ">
            <Image
              src={"/about1.png"}
              width={904}
              height={455}
              alt={""}
              className="sm:w-full lg:w-[65%] h-auto  mt-[4rem]"
            />
          </div>

          <div className="w-full flex sm:justify-center sm:items-center lg:justify-end lg:items-end sm:mt-4 lg:mt-[-10rem] ">
            <div className="bg-[#ECF5FF] p-[32px]">
              <div className="flex flex-row  items-center gap-3 w-full">
                <hr className="h-[4px] bg-[#E61] w-[51px] " />
                <p className="text-[17px] text-[#E61] font-semibold">
                  Our Story
                </p>
              </div>

              <p className="text-[24px] font-bold my-4">
                Efficient and Transparent <br className="sm:hidden lg:block" />
                Home Buying Solutions
              </p>
              <p className="text-[15px] font-medium text-[#6B7280]">
                In the symphony of bustling markets and serene landscapes,{" "}
                <br className="sm:hidden lg:block" /> Heritage-Nest was born—a
                vision to
              </p>
            </div>
          </div>

          {/* benefit section 2 */}
          <div className="w-full  flex sm:justify-center sm:items-center lg:justify-end lg:items-end ">
            <Image
              src={"/about1.png"}
              width={904}
              height={455}
              alt={""}
              className="sm:w-full lg:w-[65%] h-auto  mt-[4rem]"
            />
          </div>

          <div className="w-full flex sm:justify-center sm:items-center lg:justify-start lg:items-start sm:mt-4 lg:mt-[-10rem] ">
            <div className="bg-[#FDF0E7] p-[32px]">
              <div className="flex flex-row  items-center gap-3 w-full">
                <hr className="h-[4px] bg-[#E61] w-[51px] " />
                <p className="text-[17px] text-[#E61] font-semibold">
                  Mission Statement
                </p>
              </div>

              <p className="text-[24px] font-bold my-4">
                Efficient and Transparent <br className="sm:hidden lg:block" />
                Home Buying Solutions
              </p>
              <p className="text-[15px] font-medium text-[#6B7280]">
                In the symphony of bustling markets and serene landscapes,{" "}
                <br className="sm:hidden lg:block" /> Heritage-Nest was born—a
                vision to
              </p>
            </div>
          </div>

          <div className="flex flex-row  items-center gap-3 w-full mt-[5rem]">
            <hr className="h-[4px] bg-[#E61] w-[51px] " />
            <p className="text-[17px] text-[#E61] font-semibold">Our team</p>
          </div>
          <p className="sm:text-[30px] md:text-[40px] font-bold mt-4">
            Discover the Faces Behind Our Success
          </p>

          <Carousell headLine="Discover the Faces Behind Our Success" />

          <div className="flex flex-row  items-center gap-3 w-full mt-[64px]">
            <hr className="h-[4px] bg-[#E61] w-[51px] " />
            <p className="text-[17px] text-[#E61] font-semibold">Meet the Team For Book Consultation</p>
          </div>

<div className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between items-center">
    <div className="w-full flex flex-col sm:justify-center sm:items-center lg:justify-normal lg:items-start">
<p className="text-[40px] font-bold mt-[24px] sm:text-center lg:text-left">Meet the stewards of your <br /> heritage journey</p>
<p className="text-[15px] font-medium text-[#6B7280] mt-[8px] sm:text-center lg:text-left">each member an embodiment of expertise and warmth, dedicated to guiding you <br /> home, every step of the way.
</p>
<Button className="bg-[#0059B1] mt-8 text-white font-medium">Book Consultation Now</Button>
    </div>
    <Image src={"/a4.png"} width={500} height={500} alt={""} className="sm:w-full sm:mt-4 lg:mt-0 lg:w-[50%] h-full"/>
</div>




<Testimonial/>

        </div>
      </div>
    </>
  );
}
