import React, { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

import './Taskbar.css'

const Withdrawal = () => {

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //Add Search Logic as logic

  return (
    <div className="taskbar-container">
      <div className="taskbar">
        <div className="input-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                id='search-bar'
                onChange={handleInputChange}
            />
            <CiSearch className='input-icon'/>
        </div>

        <div className="profile-bar">
          <span className='profile-section'>
            <IoIosNotifications className='notification-icon'/>
          </span>
          <span className='profile-section'>
            <CgProfile className='profile-icon' />
            <RiArrowDropDownLine className='dropdown-icon'/>
          </span>
          
          
        </div>
      </div>
    </div>
    
  )
}

export default Withdrawal


