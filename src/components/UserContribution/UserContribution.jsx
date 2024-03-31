import React from "react";
import { BiRefresh } from "react-icons/bi";


import "./UserContribution.css";

const UserContribution = () => {
 
  return (
    <div className="dashboard">
      <div className="dashboard-item">
        <div className="main-top">
          <div className="welcome">
            <h4>Fund your future</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Contribution</h2>

        <div className="reports">
          <div className="wrapper">
            <div className="savings rsav">
              <div className="reports-item">
                <div>My balance</div>
                <div className="riNum">
                  <h1>N40,000.00</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="table ri-table">
            <table>
              <thead>
                <tr>
                  <th>Receier</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount(N)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AGU CYNTHIA</td>
                  <td>Savings</td>
                  <td>10:4.20 AM</td>
                  <td>3350</td>
                </tr>
                <tr>
                  <td>AGU CYNTHIA</td>
                  <td>Loan</td>
                  <td>10:4.20 AM</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>AGU CYNTHIA</td>
                  <td>Withdrawal</td>
                  <td>10:4.20 AM</td>
                  <td>350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContribution;
