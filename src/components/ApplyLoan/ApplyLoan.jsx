import React, { useState } from 'react';
import './ApplyLoan.css'
import { LuRefreshCw } from "react-icons/lu";

const Loan = ({handleApply}) => {

  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [cycle, setCycle] = useState('');
  const [type, setType] = useState('');
  const [reason, setReason] = useState('');
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeAmount = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleChangeCycle = (event) => {
    setCycle(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };


  return (
    <div className="wrapper-container">
      <div className="intro-container">
        <span>Borrow Wisely</span>
        <span className='refresh'>
          <span>Refresh</span>
          <span><LuRefreshCw className='refresh'/></span>
        </span>
      </div>

      <div className="title-container">
        <h2>Loan</h2>
      </div>

      <div className="input-container" id='input-loan-container'>

        <div className="input-bar">
          <label htmlFor="amount">Amount Of Principal</label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={handleChangeAmount}
          />
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        </div>

        <div className="input-bar">
          <label htmlFor="duration">Duration of Loan (months)</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="Enter duration"
            value={duration}
            onChange={handleChangeDuration}
          />
        </div>

        <div className="input-bar">
          <label htmlFor="cycle">Repayment Cycle</label>
          <select 
            id="cycle" 
            value={cycle} 
            name="cycle"
            onChange={handleChangeCycle}>

              <option value="" hidden>Select Cycle</option>
              <option value="invited">Week</option>
              <option value="resident">Week</option>
          </select>
        </div>

        <div className="input-bar">
          <label htmlFor="type">Loan Type</label>
          <select 
            id="type" 
            value={type} 
            name="type"
            onChange={handleChangeType}>

              <option value="" hidden>Choose Loan</option>
              <option value="invited">Week</option>
              <option value="resident">Week</option>
          </select>
        </div>

        <div className="input-bar">
          <label htmlFor="reason">Reason For Loan</label>
          <input
            type="text"
            id="reason"
            name="reason"
            placeholder="Enter Loan Reason"
            value={reason}
            onChange={handleChangeReason}
          />
        </div>

        <div className="submit-container">
          <button onClick={handleApply}>Apply</button>
        </div>
      </div>

    </div>
  )
}

export default Loan