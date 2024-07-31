import React from "react";

interface SymbolBoxProps {
  leftSymbol: string;
  rightSymbol: string;
}

const SymbolBox = ({ leftSymbol, rightSymbol }: SymbolBoxProps) => {
  return (
    <div className="flex items-center p-6 m-0 bg-white rounded-lg shadow-md w-fit ">
      {/* Left Symbol Box */}
      <div className=" flex items-center justify-center bg-blue-200 rounded-md p-2">
        <div className="text-sm font-bold text-center break-words">
          {leftSymbol}
        </div>
      </div>

      {/* Arrow */}
      <svg
        className="w-8 h-8 text-black mx-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>

      {/* Right Symbol Box */}
      <div className="flex items-center justify-center bg-green-200 rounded-md p-2">
        <div className="text-sm font-bold text-center break-words">
          {rightSymbol}
        </div>
      </div>
    </div>
  );
};

export default SymbolBox;
