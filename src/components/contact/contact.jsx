import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact navbar-actions">
        <div>
          <h1>Contact Us</h1>
          <br />
          <br />
          <h4>
            We're here to help you navigate your financial journey with BUCOOP.
            Whether you have questions, need support, or want to share feedback,
            our team is ready to assist you.
          </h4>
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
          </div>

          <div className="form-item">
            <div className="form-min">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="form-item">
            <div className="form-min">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="email"
                placeholder="Enter your message"
              ></textarea>
              <button id="form-subs">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="f-container">
          <div className="row">
            <div className="footer-col">
              <img src="src\assets\photo_2024-03-26_01-38-55.jpg" alt="" />
              <ul className="f-ul">
                <li>
                  Babcock Coperative Manageent System (BUCOOP) champions mutual
                  financial growth through collborative savings and loans
                </li>
              </ul>
            </div>
            <div className="footer-col help">
              <ul className="f-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Email Address</h3>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <h4>Join the Newsletter</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact
