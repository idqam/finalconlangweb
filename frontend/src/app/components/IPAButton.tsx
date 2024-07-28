// components/IPAButton.tsx
import React from "react";
import { useSymbolContext } from "../context/SymbolContext";

interface IPAButtonProps {
  symbol: string;
  className?: string;
}

const IPAButton: React.FC<IPAButtonProps> = ({ symbol, className }) => {
  const { toggleSymbol, isSymbolActive } = useSymbolContext();

  return (
    <button
      onClick={() => toggleSymbol(symbol)}
      className={`
        w-10 h-10 m-1 rounded text-lg font-semibold
        transition-all duration-300 ease-in-out
        ${
          isSymbolActive(symbol)
            ? "bg-hazel-periwinkle text-white shadow-md bg-[length:200%_200%]"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }
      `}
    >
      {symbol}
    </button>
  );
};

export default IPAButton;
