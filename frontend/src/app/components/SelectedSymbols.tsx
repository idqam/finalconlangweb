import React, { useState } from "react";
import { useSymbolContext } from "../context/SymbolContext";
import PopupSelectedSymbols from "./PopupSelectedSymbols";
import { ErrModal } from "./modals/ErrModal";

const SelectedSymbols: React.FC = () => {
  const {
    activeVowels,
    activeConsonants,
    inputMapToPhoneme,
    updateInputMapToPhoneme,
  } = useSymbolContext();

  const [errorModal, setErrorModal] = useState({ isOpen: false, message: "" });

  const [popup, setPopup] = useState({
    show: false,
    symbol: "",
    position: { x: 0, y: 0 },
  });

  const handleClick = (symbol: any, event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    setPopup({
      show: true,
      symbol,
      position: {
        x: rect.left + scrollLeft,
        y: rect.bottom + scrollTop,
      },
    });
  };
  const handleInputSubmit = (input: string) => {
    console.log(`Input for ${popup.symbol}: ${input}`);
    input = input.replace(/\s/g, "");
    if (input.length < 3) {
      setErrorModal({
        isOpen: true,
        message: "Input must be at least 1 character long.",
      });

      return;
    }
    setPopup({ ...popup, show: false });
    const splitting = input.split(">");
    updateInputMapToPhoneme(splitting[0], splitting[1]);
    console.log(inputMapToPhoneme);
  };

  const closeErrorModal = () => {
    setErrorModal({ isOpen: false, message: "" });
  };

  return (
    <>
      <div className="mt-6 flex space-x-4 m-0 justify-evenly">
        <div className="w-1/2 p-10 bg-gray-100 rounded-lg">
          <div className="flex justify-center">
            <h3 className="text-xl font-semibold mb-4">Selected Vowels</h3>
          </div>
          <div className="flex flex-wrap gap-2 max-w-60 justify-center justify-items-center  ml-10 max-h-80">
            {activeVowels.map((vowel, index) => (
              <button
                key={index}
                onClick={(e) => handleClick(vowel, e)}
                className="  flex-1 bg-blue-200 max-w-20 min-w-16 text-center rounded-md text-lg"
              >
                {vowel}
              </button>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-10 bg-gray-100 rounded-lg">
          <div className="flex justify-center">
            <h3 className="text-xl font-semibold mb-4 mt-0">
              Selected Consonants
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 max-w-60 justify-center justify-items-center ml-10 ">
            {activeConsonants.map((consonant, index) => (
              <button
                key={index}
                onClick={(e) => handleClick(consonant, e)}
                className="  flex-1 bg-blue-200 max-w-16 min-w-16 text-center rounded-md text-lg"
              >
                {consonant}
              </button>
            ))}
          </div>

          {popup.show && (
            <PopupSelectedSymbols
              symbol={popup.symbol}
              position={popup.position}
              onSubmit={handleInputSubmit}
              onClose={() => setPopup({ ...popup, show: false })}
            />
          )}
        </div>
        <ErrModal
          isOpen={errorModal.isOpen}
          onClose={closeErrorModal}
          title="Error"
        >
          <p>{errorModal.message}</p>
        </ErrModal>
      </div>
    </>
  );
};

export default SelectedSymbols;
