import React, { useState } from "react";
import Square from "./Square";

const TOTAL_YEARS = 80;
const WEEKS_PER_YEAR = 52;

const Grid: React.FC = () => {
  const [filledWeeks, setFilledWeeks] = useState<boolean[]>(
    Array(TOTAL_YEARS * WEEKS_PER_YEAR).fill(false)
  );

  const toggleWeek = (index: number) => {
    const updatedWeeks = [...filledWeeks];
    updatedWeeks[index] = !updatedWeeks[index];
    setFilledWeeks(updatedWeeks);
  };

  return (
    <div className="grid grid-cols-52 gap-[2px] p-4">
      {filledWeeks.map((filled, index) => (
        <Square key={index} filled={filled} onClick={() => toggleWeek(index)} />
      ))}
    </div>
  );
};

export default Grid;
