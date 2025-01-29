import React, { useEffect, useState } from "react";
import Square from "./Square";

const TOTAL_YEARS = 80;
const WEEKS_PER_YEAR = 52;
const BIRTHDAY = new Date(1993, 0, 19);

const Grid: React.FC = () => {
  const [filledWeeks, setFilledWeeks] = useState<boolean[]>(
    Array(TOTAL_YEARS * WEEKS_PER_YEAR).fill(false)
  );

  useEffect(() => {
    const calculateFilledWeeks = () => {
      const now = new Date();
      const diffInMilliseconds = now.getTime() - BIRTHDAY.getTime();
      const diffInWeeks = Math.floor(
        diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)
      );
      const updatedWeeks = filledWeeks.map((_, index) => index < diffInWeeks);
      setFilledWeeks(updatedWeeks);
    };

    calculateFilledWeeks();
  }, []);

  //   const toggleWeek = (index: number) => {
  //     const updatedWeeks = [...filledWeeks];
  //     updatedWeeks[index] = !updatedWeeks[index];
  //     setFilledWeeks(updatedWeeks);
  //   };

  return (
    <div className="grid grid-cols-52 gap-[2px] p-4">
      {filledWeeks.map((filled, index) => (
        <Square key={index} filled={filled} />
      ))}
    </div>
  );
};

export default Grid;
