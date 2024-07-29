"use client";
import React, { useState } from "react";
import CenteredContainer from "./components/CenteredContainer";
import SymbolSelector from "./components/SymbolSelector";
import { SymbolProvider } from "./context/SymbolContext";
import { ConlangResponse } from "@/services/api";
import MappingList from "./components/MappingList";
import { UserLetterMap } from "./components/UserLetterMap";

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
        {generatedConlang?.words ? (
          <MappingList stringList={generatedConlang?.words} />
        ) : (
          <></>
        )}
        <UserLetterMap />
      </CenteredContainer>
    </SymbolProvider>
  );
};

export default Home;
