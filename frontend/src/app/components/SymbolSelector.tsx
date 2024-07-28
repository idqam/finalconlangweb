// components/SymbolSelector.tsx
import React from "react";
import IPAButtonGrid from "./IPAButtonGrid";
import SelectedSymbols from "./SelectedSymbols";
import { useSymbolContext } from "../context/SymbolContext";
import GenButton from "./GenButton";

const SymbolSelector: React.FC = () => {
  const { vowels, consonants } = useSymbolContext();

  const handleGenerateClick = () => {
    console.log("Generate button clicked");
    // Add your generation logic here
  };

  return (
    <>
      <div className="flex justify-center">
        <GenButton onClick={handleGenerateClick} className="mb-6">
          Generate Language
        </GenButton>
      </div>
      <div className="flex space-x-4 mb-6">
        <div className="w-1/2">
          <IPAButtonGrid symbols={vowels} header="Vowels" />
        </div>
        <div className="w-1/2">
          <IPAButtonGrid symbols={consonants} header="Consonants" />
        </div>
      </div>
      <SelectedSymbols />
    </>
  );
};

export default SymbolSelector;
