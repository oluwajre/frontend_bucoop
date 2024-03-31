import React from "react";
import { BiRefresh } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { PiBankBold } from "react-icons/pi";
import './UserDashboard.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "12",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "16",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "21",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "27",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "34",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "40",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "46",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const UserDashboard = () => {
 
  return (
    <div className="dashboard">
   
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>Good morning, welcome 👋</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Crown</h2>

        <div className="wrapp">
          <div className="savings rus">
            <MdOutlineSavings style={{ width: "30px", height: "30px" }} />
            <div className="reports-item">
              <div>Total Contribution</div>
              <div className="riNum">N 40,000.00</div>
            </div>
          </div>
          <div className="loan rus">
            <PiBankBold style={{ width: "30px", height: "30px" }} />
            <div className="reports-item">
              <div>Outstanding loans</div>
              <div className="riNum">N210,000.00</div>
            </div>
          </div>
        </div>

        <div className="chart">
          <h5>Savings Report</h5>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
