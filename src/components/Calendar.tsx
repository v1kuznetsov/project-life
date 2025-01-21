"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "./Link";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

export default function GridTailwindCalendar() {
  const currentYear = new Date().getFullYear();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number.parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number.parseInt(event.target.value));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  useEffect(() => {
    setCurrentDate(new Date(selectedYear, selectedMonth, 1));
  }, [selectedMonth, selectedYear]);

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days = [];

    // Previous month's days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      days.push(
        <button
          key={`prev-${day}`}
          onClick={() => handleDateClick(date)}
          className="grid aspect-square content-center rounded-full text-center text-xl text-[--foreground-extra-color]"
        >
          {day}
        </button>,
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(
        <button
          key={`current-${day}`}
          onClick={() => handleDateClick(date)}
          className={`grid aspect-square content-center rounded-full p-3 text-center text-xl hover:bg-[--background-light] hover:text-[--foreground-dark] ${
            isToday(date) ? "outline outline-1" : ""
          } ${selectedDate && date.toDateString() === selectedDate.toDateString() ? "bg-[--background-light] text-[--foreground-dark]" : ""}`}
        >
          {day}
        </button>,
      );
    }

    // Next month's days
    const totalDays = days.length;
    for (let day = 1; totalDays + day <= 42; day++) {
      const date = new Date(year, month + 1, day);
      days.push(
        <button
          key={`next-${day}`}
          onClick={() => handleDateClick(date)}
          className="grid aspect-square content-center rounded-full text-center text-xl text-[--foreground-extra-color]"
        >
          {day}
        </button>,
      );
    }

    return days;
  };

  return (
    <div className="window-colors grid rounded-2xl p-4 text-[--foreground-light]">
      <div className="grid grid-cols-[auto,1fr,auto] pb-4">
        <div className="grid grid-cols-[auto,auto]">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="bg-transparent text-[--foreground-light]"
          >
            {MONTHS.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="bg-transparent text-[--foreground-light]"
          >
            {Array.from(
              { length: currentYear - 1900 },
              (_, i) => currentYear - i,
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handlePrevMonth}
          className="justify-self-end pr-4 active:text-[--foreground-active]"
        >
          <ChevronsLeft className="size-8" />
        </button>
        <button
          onClick={handleNextMonth}
          className="justify-self-end pl-4 active:text-[--foreground-active]"
        >
          <ChevronsRight className="size-8" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4 text-xl">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-[--foreground-extra-color]"
          >
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
      <Link
        className="button-colors mt-4 min-h-12 content-center rounded-2xl text-center transition-colors"
        href={"/grid"}
        onClick={() => {
          localStorage.setItem("age", formatDate(selectedDate));
        }}
      >
        Continue
      </Link>
      {/* {selectedDate && (
        <div className="bg-green-500 p-4 text-center">
          <p className="text-lg font-semibold">Selected Date:</p>
          <p className="text-2xl font-bold" aria-live="polite">
            {formatDate(selectedDate)}
          </p>
        </div>
      )} */}
    </div>
  );
}
