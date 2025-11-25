"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { DateRange } from "react-date-range";
import { format, isWithinInterval } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Dataset with REAL DATES
const rawData = [
  { date: "2025-01-01", value: 20 },
  { date: "2025-01-02", value: 50 },
  { date: "2025-01-03", value: 35 },
  { date: "2025-01-04", value: 60 },
  { date: "2025-01-05", value: 45 },
  { date: "2025-01-06", value: 65 },
  { date: "2025-01-07", value: 30 },
  { date: "2025-01-10", value: 80 },
  { date: "2025-01-15", value: 110 },
  { date: "2025-01-20", value: 70 },
  { date: "2025-01-25", value: 120 },
];

export default function Report() {
  const [range, setRange] = useState([
    {
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-31"),
      key: "selection",
    },
  ]);

  // Filter Data by Range
  const filteredData = rawData.filter((item) =>
    isWithinInterval(new Date(item.date), {
      start: range[0].startDate,
      end: range[0].endDate,
    })
  );

  // Convert date for display in chart
  const formattedChartData = filteredData.map((item) => ({
    name: format(new Date(item.date), "MMM dd"),
    value: item.value,
  }));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📊 Reports Dashboard
      </h1>

      {/* Date Range Selector */}
      <div className="mb-6 flex justify-center">
        <DateRange
          editableDateInputs
          moveRangeOnFirstSelection={false}
          ranges={range}
          onChange={(e) => setRange([e.selection])}
        />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4 font-semibold">
          Showing data from:{" "}
          <span className="text-blue-600">
            {format(range[0].startDate, "dd MMM yyyy")} →{" "}
            {format(range[0].endDate, "dd MMM yyyy")}
          </span>
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={formattedChartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="blue"
              strokeWidth={3}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
