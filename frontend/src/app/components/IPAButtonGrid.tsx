import React from 'react';
import IPAButton from './IPAButton';

interface IPAButtonGridProps {
  symbols: string[];
  header: string;
}

const IPAButtonGrid: React.FC<IPAButtonGridProps> = ({ symbols, header }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2 text-center">{header}</h2>
    <div className="grid grid-cols-7 gap-1 p-4 bg-gray-100 rounded-lg">
      {symbols.map((symbol) => (
        <IPAButton key={symbol} symbol={symbol} />
      ))}
    </div>
  </div>
);

export default IPAButtonGrid;