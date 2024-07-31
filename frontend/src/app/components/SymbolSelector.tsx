import React from "react";
import IPAButtonGrid from "./IPAButtonGrid";
import SelectedSymbols from "./SelectedSymbols";
import { useSymbolContext } from "../context/SymbolContext";
import GenButton from "./GenButton";

const SymbolSelector: React.FC = () => {
  const { vowels, consonants } = useSymbolContext();

  const handleGenerateClick = () => {
    console.log("Generate button clicked");
  };

  return (
    <div id = "button-ipa-container" >
      <div className="flex space-x-4 mb-6">
        <div className="">
          <IPAButtonGrid symbols={vowels} header="Vowels" />
        </div>
        <div className="">
          <IPAButtonGrid symbols={consonants} header="Consonants" />
        </div>
      </div>
      <SelectedSymbols />
    </div>
  );
};

export default SymbolSelector;
