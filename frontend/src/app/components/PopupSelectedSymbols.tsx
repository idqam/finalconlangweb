import React, { useState, useEffect } from "react";

const PopupSelectedSymbols = ({ symbol, position, onSubmit, onClose }: any) => {
  const [input, setInput] = useState(`> ${symbol}`);

  useEffect(() => {
    setInput(`${symbol} > `);
  }, [symbol]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000,
      }}
      className="bg-white border border-gray-300 rounded-md shadow-lg p-2"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 max-w-20"
          autoFocus
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          Submit
        </button>
      </form>
      <button
        onClick={onClose}
        className="absolute top-0 right-0 text-gray-500 px-2"
      >
        &times;
      </button>
    </div>
  );
};

export default PopupSelectedSymbols;
