import React, { useState } from "react";

interface MappingListProps {
  stringList: string[];
}

const MappingList: React.FC<MappingListProps> = ({ stringList }) => {
  const [entries, setEntries] = useState<string[]>(stringList.map(() => ""));

  const handleEntryChange = (index: number, value: string) => {
    const newEntries = [...entries];
    newEntries[index] = value;
    setEntries(newEntries);
  };

  return (
    <div className="flex flex-col space-y-4">
      {stringList.map((str, index) => (
        <div
          key={index}
          className="border-2 border-black p-4 flex items-center space-x-4"
        >
          <input
            type="text"
            value={entries[index]}
            onChange={(e) => handleEntryChange(index, e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <span className="text-lg font-bold">-&gt;</span>
          <span>{str}</span>
        </div>
      ))}
    </div>
  );
};

export default MappingList;
