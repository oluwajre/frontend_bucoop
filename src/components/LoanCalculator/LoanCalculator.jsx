import React, { useState } from 'react';
import './LoanCalculator.css'
import { LuRefreshCw } from "react-icons/lu";

const LoanCalculator = ({calculateLoan}) => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    let [rate, setRate]= useState('7.5');
    const [payback, setPayback] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

  
    const handleChangeAmount = (event) => {
      const value = event.target.value;
      setAmount(value);

      setRate(parseFloat(value) > 500000 ? 10.5 : 7.5);
    };
  
    const handleChangeTerm = (event) => {
      setTerm(event.target.value);
    };

   
      const handleChangePayback = (event) => {
        setPayback(event.target.value);
      };
    
    
  
  
    return (
      <div className="wrapper-container">
        <div className="intro-container">
          <span>Plan Payments</span>
          <span className='refresh'>
            <span>Refresh</span>
            <span><LuRefreshCw className='refresh'/></span>
          </span>
        </div>
  
        <div className="title-container">
          <h2>Loan Calculator</h2>
        </div>
  
        <div className="input-container">
  
          <div className="input-bar">
            <label htmlFor="amount">Amount To Withdraw</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter loan amount"
              value={amount}
              onChange={handleChangeAmount}
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>
  
          <div className="input-bar">
            <label htmlFor="term">Loan Term (months)</label>
            <input
              type="text"
              id="term"
              name="term"
              placeholder="Enter loan term"
              value={term}
              onChange={handleChangeTerm}
            />
          </div>

          <div className="input-bar">
            <label htmlFor="rate">Interest Rate (%)</label>
            <input
              type="text"
              id="rate"
              name="rate"
              placeholder="Enter Interest Rate"
              value={rate}
            //   onChange={handleChangeRate}
              readOnly
            />
          </div>

          <div className="input-bar">
            <label htmlFor="payback">Pay Back</label>
            <select 
                id="payback" 
                value={payback} 
                name="payback"
                onChange={handleChangePayback}>

                <option value="" hidden>Select Option</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
            </select>
        </div>
  
          <div className="submit-container">
            <button onClick={calculateLoan}>Calculate</button>
          </div>
        </div>
  
      </div>
    )
}

export default LoanCalculator