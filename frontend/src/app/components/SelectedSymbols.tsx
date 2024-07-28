import React from "react";
import { useSymbolContext } from "../context/SymbolContext";

const SelectedSymbols: React.FC = () => {
  const { activeVowels, activeConsonants } = useSymbolContext();

  return (
    <div className="mt-6 flex space-x-4">
      <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <h3 className="text-lg font-semibold mb-2">Selected Vowels</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {activeVowels.map((vowel, index) => (
            <span key={index} className="px-2 py-1 bg-blue-200 rounded-md">
              {vowel}
            </span>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-center">
          <h3 className="text-lg font-semibold mb-2">Selected Consonants</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {activeConsonants.map((consonant, index) => (
            <span key={index} className="px-2 py-1 bg-blue-200 rounded-md">
              {consonant}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedSymbols;
