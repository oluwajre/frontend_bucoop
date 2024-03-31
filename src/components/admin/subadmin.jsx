import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import "./home.css";

const SubAdmin = () => {
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
            <h4>Add Team Roles</h4>
          </div>
          <div className="refresh">
            <h4>Refresh</h4> <BiRefresh />
          </div>
        </div>
        <h2>Sub-Admin</h2>
        <div className="banner">
          <h3>Registraations</h3>
          <h5>Oversee new members sign-ups</h5>
          <button>View</button>
        </div>
        <div className="form">
          <div className="form-item">
            <div className="form-min">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder=" Enter your first name"
              />
            </div>

            <div className="form-min">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-item">
            <div className="form-min">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-min">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-item">
            <div className="form-min">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-min">
              <label htmlFor="adminId">Admin ID</label>
              <input
                type="text"
                id="adminId"
                name="adminId"
                placeholder="Enter your admin ID"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdmin;
