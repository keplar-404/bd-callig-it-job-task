import Magnifine from "@/components/svg/Magnifine";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="w-full overflow-hidden sm:h-[100dvw] md:h-[360px] lg:h-[560px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute min-w-full min-h-full w-auto h-auto z-[1]"
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>

        <div
          className="min-w-full min-h-full w-auto h-auto z-[2]  absolute "
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5), black)",
          }}
        ></div>

        <div className="absolute w-full h-full flex flex-col justify-center items-center z-[3] text-white">
          <p className="text-[16px] font-medium text-center">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <p className="sm:text-[22px] md:text-[64px] font-semibold sm:w-[300px] md:w-[50rem] text-center tracking-[-1.28px] sm:leading-normal md:leading-[72px] my-[3rem]">
            Your Portal to India's Exquisite Real Estate
          </p>

          <Link href={"/buy"}>
            <button className="btn bg-[#0059b1] rounded">
              <Magnifine color={"white"} />
              Find Property
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-[88px]">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px] flex flex-col ">
          {/* 2nd section */}
          <div className="flex gap-[68px] flex-wrap justify-center">
            <div className="relative flex justify-center items-center">
              <Image
                src={"/2nd3.png"}
                height={592}
                width={504}
                alt=""
                className=""
              />
              <Image
                src={"/playbtn.png"}
                height={72}
                width={72}
                alt=""
                className="absolute sm:ml-0 xl:ml-[18rem] cursor-pointer"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#F06711]">
                <s className="">Property</s> buying
              </p>
              <p className="text-[40px] font-bold tracking-[-0.8px] mt-[16px]">
                Efficient and Transparent <br />
                Home Buying Solutions
              </p>
              <p className="text-[#667085] font-medium mt-[24px]">
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout.
              </p>
              <Link href={"/buy"}>
                <button className="btn bg-[#ECF5FF] text-[#0059B1] mt-[48px] rounded">
                  {/* <Image src={"/Magnifer.svg"} height={24} width={24} alt="" className="text-[#0059B1]" /> */}
                  <Magnifine color={"#0059B1"} />
                  Find Property
                </button>
              </Link>
            </div>
          </div>

          {/* 3rd section */}
          <div className="flex gap-[68px] flex-wrap justify-center mt-[77px]">
            <div>
              <p className="text-[18px] font-semibold text-[#F06711]">
                <s className="">Property</s> buying
              </p>
              <p className="text-[40px] font-bold tracking-[-0.8px] mt-[16px]">
                Efficient and Transparent <br />
                Home Buying Solutions
              </p>
              <p className="text-[#667085] font-medium mt-[24px]">
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout.
              </p>
              <Link href={"/buy"}>
                <button className="btn bg-[#ECF5FF] text-[#0059B1] mt-[48px] rounded">
                  {/* <Image src={"/Magnifer.svg"} height={24} width={24} alt="" className="text-[#0059B1]" /> */}
                  <Magnifine color={"#0059B1"} />
                  Find Property
                </button>
              </Link>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src={"/2nd4.png"}
                height={592}
                width={504}
                alt=""
                className=""
              />
              <Image
                src={"/playbtn.png"}
                height={72}
                width={72}
                alt=""
                className="absolute sm:mr-0 sm:mb-0 xl:mr-[20rem] xl:mb-[13rem] cursor-pointer"
              />
            </div>
          </div>

          {/* 4th section */}
          <div className="flex gap-[68px] flex-wrap justify-center mt-[77px]">
            <div className="relative flex justify-center items-center">
              <Image
                src={"/2nd5.png"}
                height={592}
                width={504}
                alt=""
                className=""
              />
              <Image
                src={"/playbtn.png"}
                height={72}
                width={72}
                alt=""
                className="absolute sm:ml-0 xl:ml-[18rem] cursor-pointer"
              />
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#F06711]">
                <s className="">Property</s> buying
              </p>
              <p className="text-[40px] font-bold tracking-[-0.8px] mt-[16px]">
                Efficient and Transparent <br />
                Home Buying Solutions
              </p>
              <p className="text-[#667085] font-medium mt-[24px]">
                It is a long established fact that a reader will be distracted
                by the <br /> readable content of a page when looking at its
                layout.
              </p>
              <Link href={"/buy"}>
                <button className="btn bg-[#ECF5FF] text-[#0059B1] mt-[48px] rounded">
                  {/* <Image src={"/Magnifer.svg"} height={24} width={24} alt="" className="text-[#0059B1]" /> */}
                  <Magnifine color={"#0059B1"} />
                  Find Property
                </button>
              </Link>
            </div>
          </div>

          {/* 5th section */}
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
        </div>
      </div>
    </>
  );
}

// sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]
