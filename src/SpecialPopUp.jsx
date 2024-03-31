import React from 'react';
import Popup from 'react-popup';


const SpecialPopUp = ({ title, content, onClose }) => (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="buttons">
        {/* <button onClick={onClose}>Cancel</button> */}
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
  
  export default SpecialPopUp;
  