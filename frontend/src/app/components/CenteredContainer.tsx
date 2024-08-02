import React, { ReactNode } from "react";
import { useSymbolContext } from "../context/SymbolContext";
import { ConlangResponse, generateConlang } from "@/services/api";
import GenButton from "./GenButton";
import { OutputContainer } from "./OutputContainer";

interface CenteredContainerProps {
  children: React.ReactNode;
  onGenerateConlang: (data: ConlangResponse) => void;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({
  children,
  onGenerateConlang,
}) => {
  const { activeVowels, activeConsonants } = useSymbolContext();
  let data;

  const handleGenerateConlang = async () => {
    try {
      data = await generateConlang({
        vowels: activeVowels,
        consonants: activeConsonants,
      });
      onGenerateConlang(data);
    } catch (error) {
      console.error("Error generating conlang:", error);
    }
  };


  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-blue-200 mt-0">
      <div className="m-10">PLACE HOLDER DIV FOR INTRO</div>
      <div className="bg-red-400 p-8 rounded-lg shadow-lg max-w-none ">
        <div className="flex justify-center items-center">
          <GenButton onClick={handleGenerateConlang} className="mb-6">
            Generate Language
          </GenButton>
        </div>
        {children}
      </div>
      <OutputContainer />
    </div>
  );
};

export default CenteredContainer;
