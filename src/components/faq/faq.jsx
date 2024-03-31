import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./faq.css";

const Faq = () => {
  useEffect(() => {
    // Function to handle toggle effect for FAQ items
    const toggleFAQ = (event) => {
      const accordion = event.currentTarget;
      const panel = accordion.nextElementSibling;

      panel.style.display = panel.style.display === "block" ? "none" : "block";
    };

    // Add click event listeners to all elements with the class "accordion"
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", toggleFAQ);
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("click", toggleFAQ);
      });
    };
  }, []);

  return (
    <div>
      <div className="bgc-image">
        <div className="bgc-overlay">
          <div className="faq-head">
            <h1>FAQs</h1>
          </div>
        </div>
      </div>
      <div className="wrappers">
        <div className="faq">
          <button className="accordion">
            How do I join BUCOOP
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            Can I apply for a loan immediately after joining?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Members are eligible to apply for loans after a brief waiting
              period, allowing us to ensure a foundation of mutual trust and
              contribution
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            What are the benefits of BUCOOP membership?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How are loan applications reviewed and approved
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            Is there a way to increase my monthly contribution
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            What happens if I want to terminate my membership
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq
