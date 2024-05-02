"use client";

import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex gap-4">
        <li>
        <button
            className={`py-[8px] px-[10px] ${
              page === 1
                ? "bg-[#0059B1] text-white"
                : "bg-[#ECF5FF] text-[#4B5563]"
            }   rounded-[4px]`}
            onClick={() => setPage(1)}
          >
            01
          </button>
        </li>
        <li>
          <button
            className={`py-[8px] px-[10px] ${
              page === 2
                ? "bg-[#0059B1] text-white"
                : "bg-[#ECF5FF] text-[#4B5563]"
            }   rounded-[4px]`}
            onClick={() => setPage(2)}
          >
            02
          </button>
        </li>

        <li>
          <button
            className={`py-[8px] px-[10px] ${
              page === 3
                ? "bg-[#0059B1] text-white"
                : "bg-[#ECF5FF] text-[#4B5563]"
            }   rounded-[4px]`}
            onClick={() => setPage(3)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
