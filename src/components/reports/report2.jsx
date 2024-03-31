import React, { useState, PureComponent } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { PiBankBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
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

import "../admin/home.css";
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
const ReportTwo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>View Insights</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Reports</h2>

        <div className="reports">
          <h5>SUMMARY</h5>

          <div class="wrapper">
            <div class="savings ri">
              <MdOutlineSavings style={{ width: "30px", height: "30px" }} />
              <div className="reports-item">
                <div>Savings Requests</div>
                <div className="riNum">33</div>
              </div>
            </div>
            <div class="loan ri">
              <PiBankBold style={{ width: "30px", height: "30px" }} />
              <div className="reports-item">
                <div>Loan Requests</div>
                <div className="riNum">100</div>
              </div>
            </div>
            <div class="withdrawal ri">
              <BiMoneyWithdraw style={{ width: "30px", height: "30px" }} />
              <div className="reports-item">
                <div>Withdrawal Requests</div>
                <div className="riNum">24</div>
              </div>
            </div>
          </div>
          <div class="row">
            <select>
              <option value="all">All Statement</option>
              <option value="account">Account Statement</option>
            </select>
            <div className="search">
              <form onSubmit={handleSubmit}>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                />
                {/* <button type="submit">Search</button> */}
              </form>
            </div>
            <div>
              <button>Generate Report</button>
              <button>Download All</button>
            </div>
          </div>
          <div className="table ri-table">
            <table>
              <thead>
                <tr>
                  <th>Report</th>
                  <th>Type</th>
                  <th>Full Name</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BiSolidReport />
                  </td>
                  <td>Savings</td>
                  <td>AGU CYNTHIA</td>
                  <td>10:4.20 AM</td>
                  <td>
                    <TfiDownload />
                  </td>
                </tr>
                <tr>
                  <td>
                    <BiSolidReport />
                  </td>
                  <td>Loan</td>
                  <td>AGU CYNTHIA</td>
                  <td>10:4.20 AM</td>
                  <td>
                    <TfiDownload />
                  </td>
                </tr>
                <tr>
                  <td>
                    <BiSolidReport />
                  </td>
                  <td>Withdrawal</td>
                  <td>AGU CYNTHIA</td>
                  <td>10:4.20 AM</td>
                  <td>
                    <TfiDownload />
                  </td>
                </tr>
              </tbody>
            </table>
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
    </div>
  );
};

export default ReportTwo;
