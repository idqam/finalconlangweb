import React, { ReactNode } from "react";

interface StyledButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const GenButton: React.FC<StyledButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
          text-xl
          text-semibold
          text-black
          px-6
          py-3
          mb-16
          rounded-lg
          shadow-md
          bg-ivory
          hover:bg-ivory-dark
          transition duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-ivory-dark focus:ring-opacity-50
          ${className}
        `}
    >
      {children}
    </button>
  );
};

export default GenButton;
