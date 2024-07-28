import { IPA_VOWELS, IPA_CONSONANTS } from "@/constants/ipaSymbols";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SymbolContextType {
  vowels: string[];
  consonants: string[];
  activeVowels: string[];
  activeConsonants: string[];
  toggleSymbol: (symbol: string) => void;
  isSymbolActive: (symbol: string) => boolean;
}

const SymbolContext = createContext<SymbolContextType | undefined>(undefined);

export const useSymbolContext = () => {
  const context = useContext(SymbolContext);
  if (!context) {
    throw new Error("useSymbolContext must be used within a SymbolProvider");
  }
  return context;
};

interface SymbolProviderProps {
  children: ReactNode;
}

export const SymbolProvider: React.FC<SymbolProviderProps> = ({ children }) => {
  const [activeVowels, setActiveVowels] = useState<string[]>([]);
  const [activeConsonants, setActiveConsonants] = useState<string[]>([]);

  const toggleSymbol = (symbol: string) => {
    if (IPA_VOWELS.includes(symbol)) {
      setActiveVowels((prev) =>
        prev.includes(symbol)
          ? prev.filter((v) => v !== symbol)
          : [...prev, symbol]
      );
    } else if (IPA_CONSONANTS.includes(symbol)) {
      setActiveConsonants((prev) =>
        prev.includes(symbol)
          ? prev.filter((c) => c !== symbol)
          : [...prev, symbol]
      );
    }
  };

  const isSymbolActive = (symbol: string) => {
    return activeVowels.includes(symbol) || activeConsonants.includes(symbol);
  };

  const value = {
    vowels: IPA_VOWELS,
    consonants: IPA_CONSONANTS,
    activeVowels,
    activeConsonants,
    toggleSymbol,
    isSymbolActive,
  };

  return (
    <SymbolContext.Provider value={value}>{children}</SymbolContext.Provider>
  );
};
