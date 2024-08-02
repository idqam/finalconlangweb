import React, { useState, useEffect } from "react";
import SymbolBox from "./SymbolBox";
import { useSymbolContext } from "../context/SymbolContext";

export const MappingList = () => {
  const { inputMapToPhoneme } = useSymbolContext();
  const [mapDisplay, setMapDisplay] = useState([]);

  useEffect(() => {
    console.log("InputMapToPhoneme updated:", inputMapToPhoneme);
    const newMapDisplay: any = Array.from(inputMapToPhoneme).map(
      ([key, val]) => <SymbolBox key={key} leftSymbol={val} rightSymbol={key} />
    );
    setMapDisplay(newMapDisplay);
  }, [inputMapToPhoneme]);

  return (
    <div className="flex flex-wrap gap-3 p-3 justify-center">
      {mapDisplay.length > 0 ? mapDisplay : <></>}
    </div>
  );
};
