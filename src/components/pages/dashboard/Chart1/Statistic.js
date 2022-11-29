import React, { PureComponent } from "react";
import "./Statistic.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2500,
    amt: 5000,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 4000,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3000,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 2000,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3000,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 3500,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 6000,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 5000,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 3000,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 5000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#F2EFFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
