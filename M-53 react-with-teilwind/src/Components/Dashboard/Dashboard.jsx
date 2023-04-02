import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      physics: 85,
      chemistry: 92,
      math: 78,
    },
    {
      id: 2,
      name: "Bob",
      physics: 76,
      chemistry: 89,
      math: 93,
    },
    {
      id: 3,
      name: "Charlie",
      physics: 90,
      chemistry: 87,
      math: 85,
    },
    {
      id: 4,
      name: "Diana",
      physics: 82,
      chemistry: 90,
      math: 87,
    },
    {
      id: 5,
      name: "Edward",
      physics: 89,
      chemistry: 91,
      math: 84,
    },
    {
      id: 6,
      name: "Fiona",
      physics: 75,
      chemistry: 85,
      math: 92,
    },
    {
      id: 7,
      name: "George",
      physics: 95,
      chemistry: 93,
      math: 90,
    },
    {
      id: 8,
      name: "Hannah",
      physics: 88,
      chemistry: 82,
      math: 89,
    },
    {
      id: 9,
      name: "Isaac",
      physics: 81,
      chemistry: 87,
      math: 94,
    },
    {
      id: 10,
      name: "Jane",
      physics: 92,
      chemistry: 85,
      math: 88,
    },
    {
      id: 11,
      name: "Katie",
      physics: 86,
      chemistry: 90,
      math: 91,
    },
    {
      id: 12,
      name: "Leo",
      physics: 80,
      chemistry: 86,
      math: 83,
    },
  ];

  return (
    <div>
        <LineChart width={1000} height={300} data={students}>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip />
          <Legend />
          <Line stroke="#8884d8" dataKey="physics"></Line>
          <Line stroke="#82ca9d" dataKey="chemistry"></Line>
          <Line dataKey="math"></Line>
        </LineChart>
    </div>
  );
};

export default Dashboard;
