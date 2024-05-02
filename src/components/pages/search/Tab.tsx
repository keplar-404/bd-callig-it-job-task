"use client";

import React, { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("properties");
  return (
    <div className="sm:w-[295px] md:w-[604px] flex justify-between items-center">
 

      <button
        className={`sm:text-[10px] md:text-[18px] font-semibold rounded-[4px] sm:p-[5px] md:p-[10px]  ${
          tab === "properties"
            ? "bg-[#0059B1] text-white"
            : "bg-[#ECF5FF] text-[#606060]"
        }`}
        onClick={() => setTab("properties")}
      >
        properties (400)
      </button>

      <button
        className={`sm:text-[10px] md:text-[18px] font-semibold rounded-[4px] sm:p-[5px] md:p-[10px]  ${
          tab === "new"
            ? "bg-[#0059B1] text-white"
            : "bg-[#ECF5FF] text-[#606060]"
        }`}
        onClick={() => setTab("new")}
      >
        New Projects (400)
      </button>

      <button
        className={`sm:text-[10px] md:text-[18px] font-semibold rounded-[4px] sm:p-[5px] md:p-[10px]  ${
          tab === "offer"
            ? "bg-[#0059B1] text-white"
            : "bg-[#ECF5FF] text-[#606060]"
        }`}
        onClick={() => setTab("offer")}
      >
        Pre-launch offers
      </button>
    </div>
  );
}
