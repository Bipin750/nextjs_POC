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

// Sample Data
const reportsData = {
  weekly: [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 28 },
    { name: "Thu", value: 50 },
    { name: "Fri", value: 60 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 35 },
  ],

  monthly: [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 280 },
    { name: "Mar", value: 350 },
    { name: "Apr", value: 300 },
    { name: "May", value: 500 },
    { name: "Jun", value: 450 },
  ],
};

export default function Report() {
  const [filter, setFilter] = useState("weekly");

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Reports & Analytics
      </h1>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Chart Container */}
      <div className="border shadow-md p-6 rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4 capitalize">
          {filter} Report
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reportsData[filter]}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="blue"
              strokeWidth={3}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
