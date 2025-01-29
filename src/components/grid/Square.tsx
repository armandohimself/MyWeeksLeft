import React from "react";

type SquareProps = {
  filled?: boolean; // Whether the square is filled/marked
  onClick?: () => void; // Click handler
};

const Square: React.FC<SquareProps> = ({ filled = false, onClick }) => {
  return (
    <div
      className={`w-4 h-4 border border-gray-400 ${
        filled ? "bg-blue-500" : "bg-white"
      }`}
      onClick={onClick}
    />
  );
};

export default Square;
