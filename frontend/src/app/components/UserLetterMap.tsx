import { useContext, useEffect, useState } from "react";
import { useSymbolContext } from "../context/SymbolContext";
import { Input } from "@/components/ui/input";

export const UserLetterMap = () => {
  const { activeVowels, activeConsonants, inputMapToPhoneme } =
    useSymbolContext();

  const [input, setInputConsonant] = useState("");
  const [inputVowel, setInputVowel] = useState("");

  const consonantInput = input.split(",");
  console.log(consonantInput);
  const vowelInput = inputVowel.split(",");

  function createMapping() {
    if (vowelInput.length != activeVowels.length) {
      ("Cannot create mapping, number of provided symbols not equal to active vowels");
    }
    if (consonantInput.length != activeConsonants.length) {
      ("Cannot create mapping, number of provided symbols not equal to active consonants");
    }

    const consMap = new Map(
      consonantInput.map((val, index) => [val, activeConsonants[index]])
    );
    const vowelMap = new Map(
      vowelInput.map((val, index) => [val, activeVowels[index]])
    );

    inputMapToPhoneme.set("consonantMap", consMap);
    inputMapToPhoneme.set("vowelMap", vowelMap);
    console.log(inputMapToPhoneme);
    console.log("in here");
  }

  console.log(inputMapToPhoneme.get("consonantMap"));

  if (activeVowels || activeConsonants) {
    return (
      <>
        <div className="flex flex-wrap justify-center space-x-10">
          <div className="flex flex-wrap justify-center ">
            <h1 className="mb-2 mt-2 rounded border-4 border-blue-300 p-2">
              {" "}
              Vowel Map{" "}
            </h1>
            <Input onChange={(e) => setInputVowel(e.target.value)} />
          </div>
          <div className="flex flex-wrap justify-center ">
            <h1 className="mb-2 mt-2 rounded border-4 border-blue-300 p-2">
              {" "}
              Consonant Map{" "}
            </h1>

            <Input onChange={(e) => setInputConsonant(e.target.value)} />
          </div>
        </div>
        <div>
          <button onClick={() => createMapping()}>sdfsd</button>
        </div>
      </>
    );
  }

  return <></>;
};
