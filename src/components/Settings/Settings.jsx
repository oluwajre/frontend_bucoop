import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";
import './Settings.css'

const Settings = ({updatedSetting, security}) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');
    const [imageFile, setImageFile] = useState(null);
    // const [errorMessage, setErrorMessage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  };
  
    const handleChangeFname = (event) => {
      const value = event.target.value;
      setFname(value);
    };

    const handleChangeLname = (event) => {
        const value = event.target.value;
        setLname(value);
      };

    const handleChangeId = (event) => {
    const value = event.target.value;
    setId(value);
    };

    const handleChangePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
        };
  
  
    return (
      <div className="wrapper-container">
        <div className="intro-container">
          <span>Customize Here</span>
          <span className='refresh'>
            <span>Refresh</span>
            <span><LuRefreshCw className='refresh'/></span>
          </span>
        </div>
  
        <div className="title-container">
          <h2>Account Settings</h2>
        </div>

        <div className='settings-menu'>
            <span><Link to={security[0]}>Account Settings</Link></span>
            <span><Link to={security[1]}>Login & Secuity</Link></span>
            <span><Link to={security[2]}>Notifications</Link></span>
        </div>

        <div className="input-bar" id='image-container'>
            <label htmlFor="image">Your Profile Picture</label>
            <input 
                type="file" 
                id="image"
                name='image'
                accept="image/*" 
                onChange={handleImageChange} 
            />
            {/* {imageFile && (
                <div>
                <img src={URL.createObjectURL(imageFile)} alt="Selected Image Preview" className='image-preview'/>
                </div>
            )} */}
          </div>
  
        <div className="input-container" id='settings-container'>
  
          <div className="input-bar">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Mark Henry"
              value={fname}
              onChange={handleChangeFname}
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>
  
          <div className="input-bar">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="crown@gmail.com"
              value={lname}
              onChange={handleChangeLname}
            />
          </div>

          <div className="input-bar">
            <label htmlFor="id">Staff Id</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="13"
              value={id}
              onChange={handleChangeId}
            />
          </div>

          <div className="input-bar">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="09137819540"
              value={phone}
              onChange={handleChangePhone}
            />
          </div>
        </div>

        <div className="submit-container" id='update-container'>
            <button onClick={updatedSetting}>Update Changes</button>
          </div>
  
      </div>
    )
}

export default Settings