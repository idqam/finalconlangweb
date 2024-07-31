"use client";
import React, { useState } from "react";
import CenteredContainer from "./components/CenteredContainer";
import SymbolSelector from "./components/SymbolSelector";
import { SymbolProvider } from "./context/SymbolContext";
import { ConlangResponse } from "@/services/api";
import SymbolBox from "./components/SymbolBox";

const Home: React.FC = () => {
  const [generatedConlang, setGeneratedConlang] =
    useState<ConlangResponse | null>(null);

  const handleGenerateConlang = (data: ConlangResponse) => {
    setGeneratedConlang(data);
  };

  console.log(generatedConlang);
  return (
    <SymbolProvider>
      <CenteredContainer onGenerateConlang={handleGenerateConlang}>
        <SymbolSelector />
        <div className="flex flex-wrap justify-start mt-10 border-2 rounded-lg space-x-4 m-0 p-0">
          <SymbolBox leftSymbol={"PLACEHOLDER"} rightSymbol={"PLACEHOLDER"} />
          <SymbolBox leftSymbol={"PLACEHOLDER"} rightSymbol={"PLACEHOLDER"} />
          <SymbolBox leftSymbol={"PLACEHOLDER"} rightSymbol={"PLACEHOLDER"} />
        </div>
      </CenteredContainer>
    </SymbolProvider>
  );
};

export default Home;
