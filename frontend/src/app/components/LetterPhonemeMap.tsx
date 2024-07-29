import { useSymbolContext } from "../context/SymbolContext";

export const LetterPhonemeMap = () => {
  const { activeConsonants, activeVowels } = useSymbolContext();

  if (activeConsonants || activeVowels) {
    return(
        <div className="mt-6 flex space-x-4">
            


        </div>
    )
  } else {
    return <></>;
  }
};
