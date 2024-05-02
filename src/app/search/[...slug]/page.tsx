import Testimonial from "@/components/pages/buy page/Testimonial";
import Loan from "@/components/pages/search/Loan";
import Pagination from "@/components/pages/search/Pagination";
import Property from "@/components/pages/search/Property";
import Tab from "@/components/pages/search/Tab";
import Devider from "@/components/ui/Devider";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px] mt-[5rem]">
          <Tab />
          <Devider className="sm:w-[295px] md:w-[604px] bg-[#E3E3E3] my-[16px]" />

          <p className="text-[22px] font-medium mb-[32px]">
            400 results for rental property
          </p>

          <div className="flex flex-col gap-4">
            <Link href={"/s53sa65df65"}>
              <Property />
            </Link>
            <Link href={"/s53sa65df65"}>
              <Property />
            </Link>
            <Link href={"/s53sa65df65"}>
              <Property />
            </Link>
            <Link href={"/s53sa65df65"}>
              <Property />
            </Link>
        
          </div>
          <Devider className="w-full bg-[#E3E3E3] my-[16px]" />

          <Pagination />

          <Loan />
          <Testimonial />
        </div>
      </div>
    </>
  );
}

// sm:w-[300px] md:w-[690px] lg:w-[900px] xl:w-[1200px]
