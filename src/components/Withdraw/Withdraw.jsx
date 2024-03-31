import React, { useState } from 'react';
import './Withdraw.css';
import { LuRefreshCw } from "react-icons/lu";

const Withdraw = () => {

  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeAmount = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleChangePurpose = (event) => {
    setPurpose(event.target.value);
  };


  return (
    <div className="wrapper-container">
      <div className="intro-container">
        <span>Access Funds</span>
        <span className='refresh'>
          <span>Refresh</span>
          <span><LuRefreshCw className='refresh'/></span>
        </span>
      </div>

      <div className="title-container">
        <h2>Withdraw</h2>
      </div>

      <div className="input-container">

        <div className="input-bar">
          <label htmlFor="amount">Amount To Withdraw</label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount here"
            value={amount}
            onChange={handleChangeAmount}
          />
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        </div>

        <div className="input-bar">
          <label htmlFor="purpose">Purpose</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            placeholder="Enter purpose"
            value={purpose}
            onChange={handleChangePurpose}
          />
        </div>

        <div className="submit-container">
          <button>Withdraw</button>
        </div>
      </div>

    </div>
  )
}

export default Withdraw