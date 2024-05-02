export default function Loan() {
  return (
    <>
      <div className="sm:w-[90%] md:w-[75%]  bg-[#ECF5FF] sm:p-[15px] md:p-[32px] grid sm:grid-cols-1 md:grid-cols-5 my-[64px]">
        <div className="col-span-2">
          <p className="text-[22px] font-semibold">Need a Home Loan?</p>
          <p className="text-[#535353]">
            Select How much Home loan you can <br /> take
          </p>
        </div>

        <div className="w-full col-span-3">
          <input
            type="range"
            className="w-full"
            min={0}
            max={100}
            defaultValue={0}
          />
          <div className="w-full flex justify-between items-center">
            <p className="text-[#535353] font-medium">$20K</p>
            <p className="text-[#535353] font-medium">$30K</p>
            <p className="text-[#535353] font-medium">$40K</p>
            <p className="text-[#535353] font-medium">$50K</p>
            <p className="text-[#535353] font-medium">$60K+</p>
          </div>
        </div>
      </div>
    </>
  );
}
