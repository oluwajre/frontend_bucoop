import React, { useState } from 'react';
import '../LoanStatus/LoanStatus.css'
import { LuRefreshCw } from "react-icons/lu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { MdEdit, MdOutlineDelete } from "react-icons/md";



const AdminLoan = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2024/01/01')); // Initial state
    const [query, setQuery] = useState('');
      
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  return (
    <div className="wrapper-container">
      <div className="intro-container">
        <span>View Loan Requests</span>
        <span className='refresh'>
          <span>Refresh</span>
          <span><LuRefreshCw className='refresh'/></span>
        </span>
      </div>

      <div className="title-container">
        <h2>Loans</h2>
      </div>

      <div className="input-container" id='status-input-container'>

        <div className='container-x'>
            <div className="input-bar">
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className='l-input'
                id='date-picker'
            />
            <FaRegCalendarAlt className='input-icon' />
            </div>

            <div className="input-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    id='search-bar'
                    onChange={handleInputChange}
                />
                <CiSearch className='input-icon'/>
                <IoFilter className='input-icon' id='right-input-icon'/>
            </div>
        </div>
        <div className='container-x' id='status-section'>
            <div className="container-x">
                <span>Name</span>
                <span>Amount(₦)</span>
                <span>Date</span>
                <span>Status</span>
                <span></span>
            </div>

            <div className="container-x">
                <span>
                    <span><PiIdentificationBadgeFill/></span>
                    <span>Agu Cynthia</span>
                </span>
                <span>40,000</span>
                <span>2024/01/12</span>
                <span className='approved'>Approved</span>
                <span><MdEdit /><MdOutlineDelete /></span>
            </div>

            <div className="container-x">
                <span>
                    <span><PiIdentificationBadgeFill/></span>
                    <span>David Mark</span>
                </span>
                <span>100,000</span>
                <span>2024/01/29</span>
                <span className='declined'>Declined</span>
                <span><MdEdit /><MdOutlineDelete /></span>
            </div>
            
        </div>

      </div>

    </div>
  )
}

export default AdminLoan