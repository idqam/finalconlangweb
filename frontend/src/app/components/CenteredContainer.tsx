import React, { ReactNode } from "react";

interface CenteredContainerProps {
  children: ReactNode;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => (
  <div className="flex justify-center items-center min-h-screen bg-blue-200 mt-0">
    <div className="bg-red-400 p-8 rounded-lg shadow-lg max-w-none">
      {children}
    </div>
  </div>
);

export default CenteredContainer;
