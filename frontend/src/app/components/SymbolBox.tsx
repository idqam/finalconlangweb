import React from "react";

interface SymbolBoxProps {
  leftSymbol: string;
  rightSymbol: string;
}

const SymbolBox = ({ leftSymbol, rightSymbol }: SymbolBoxProps) => {
  return (
    <div className="flex items-center p-2 m-0 bg-red-400 rounded-lg shadow-md ">
      <div className=" flex items-center justify-center bg-blue-200 rounded-md p-2 max-w-10">
        <div className="text-sm font-bold text-center break-words max-w-sm">
          {leftSymbol}
        </div>
      </div>

      <svg
        className="w-4 h-4 text-black mx-4"
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

      <div className=" flex items-center justify-center bg-blue-200 rounded-md p-2 max-w-10">
        <div className="text-sm font-bold text-center break-words max-w-sm">
          {rightSymbol}
        </div>
      </div>
    </div>
  );
};

export default SymbolBox;
