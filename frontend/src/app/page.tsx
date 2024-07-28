"use client";
import React from "react";
import CenteredContainer from "./components/CenteredContainer";
import SymbolSelector from "./components/SymbolSelector";
import { SymbolProvider } from "./context/SymbolContext";

const Home: React.FC = () => {
  return (
    <SymbolProvider>
      <CenteredContainer>
        <SymbolSelector />
      </CenteredContainer>
    </SymbolProvider>
  );
};

export default Home;
