"use client";
import React, { useState } from "react";
import CenteredContainer from "./components/CenteredContainer";
import SymbolSelector from "./components/SymbolSelector";
import { SymbolProvider } from "./context/SymbolContext";
import { ConlangResponse } from "@/services/api";
import { MappingList } from "./components/MappingList";

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
        <div className="flex flex-wrap flex-col justify-center">
          <div className="flex justify-center items-center">
            <div className="text-lg font-semibold p-3 ml-4 mt-8 mb-0 text-center border-solid border-2 rounded-lg bg-slate-400">
              CURRENT MAPPING
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-evenly space-y-4 bg-gray-900 mt-5 border-2 rounded-lg ml-5 p-2 max-w-2xl">
              <MappingList />
            </div>
          </div>
        </div>
      </CenteredContainer>
    </SymbolProvider>
  );
};

export default Home;
