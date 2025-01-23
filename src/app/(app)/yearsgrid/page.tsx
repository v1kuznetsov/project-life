"use client";

import React, { useEffect, useState } from "react";
import Footer from "~/components/Footer";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Grid() {
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [currentDate] = useState(new Date());

  useEffect(() => {
    const storedAge = localStorage.getItem("birthday");

    if (storedAge) {
      setBirthday(new Date(storedAge));
    }
  }, []);

  if (!birthday) {
    return (
      <div className="grid items-center justify-center">
        Birthday not selected
      </div>
    );
  }

  const monthsSinceStart =
    (currentDate.getFullYear() - birthday.getFullYear()) * 12 +
    (currentDate.getMonth() - birthday.getMonth());

  const addMonths = (date: Date, months: number) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  };

  const formatDate = (date: Date) => {
    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  };

  const renderGrid = () => {
    const grid = [];
    for (let year = 0; year < 100; year++) {
      const row = [];
      for (let month = 0; month < 12; month++) {
        const date = addMonths(birthday, year * 12 + month);
        const isPast = date < currentDate;

        row.push(
          <div
            key={`${year}-${month}`}
            className={`m-2 grid size-4 items-center justify-center rounded-[100%] ${isPast ? "bg-[--foreground-extra-color]" : "bg-[--background-light]"} cursor-pointer transition-colors hover:blur-sm`}
            title={formatDate(date)}
          ></div>,
        );
      }
      grid.push(
        <div
          key={year}
          className="grid grid-cols-[repeat(13,_minmax(0,_1fr))] items-center justify-center"
        >
          <p className="cursor-default font-bold">{year}</p>
          {row}
        </div>,
      );
    }
    return grid;
  };

  return (
    <>
      <div className="grid items-center justify-center">{renderGrid()}</div>
      <Footer
        name={localStorage.getItem("name") || "Your name"}
        birthday={birthday.toDateString()}
        lived={monthsSinceStart}
        total={1200}
      ></Footer>
    </>
  );
}
