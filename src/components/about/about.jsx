import "./about.css";
// import { Link } from "react-router-dom";
// import { FaUsers } from "react-icons/fa6";
// import { BsBank } from "react-icons/bs";
// import { MdOutlineSavings } from "react-icons/md";
// import { HiDocumentReport } from "react-icons/hi";

const About = () => {
  return (
    <div>
      <div className="landing navbar-actions">
        <div>
          <h1>About Us</h1>
          <br />
          <br />
          <h4>
            Babcock Cooperative Management System(BUCOOP) is a forward-thinking
            cooperative platform designed to bring individuals together for
            financial growth through mutual support. Rooted in empowerment and
            community values, BUCOOP provides essential financial services like
            savings, loans and management tools.
          </h4>
        </div>
        <div>
          <img src="src\assets\photo_2024-03-25_22-53-03.jpg" alt="" />
        </div>
      </div>
      <div className="landing navbar-actions">
        <div>
          <img src="src\assets\photo_2024-03-25_22-52-51.jpg" alt="" />
        </div>
        <div>
          <h1>Our Mission</h1>
          <br />
          <br />
          <h4>
            Our mission is to empower our members by providing a robust platform
            for financial cooperation and growth. We strive to create a
            supportive community where individuals can access affordable
            financial services, benefit from shared resources, and achieve their
            economic aspirations. Through innovation, integrity, and
            inclusivity, we are committed to making financial success accessible
            to all.
          </h4>
        </div>
      </div>
      <div className="landing navbar-actions">
        <div>
          <h1>Our Vision</h1>
          <br />
          <br />
          <h4>
            Our vision is to become a leading cooperative platform that
            redefines the landscape of financial services through
            community-driven initiatives. We envision a future where our members
            attain unparalleled financial stability and prosperity, driven by
            the principles of cooperation, mutual support, and collective
            progress.
          </h4>
        </div>
        <div>
          <img src="src\assets\photo_2024-03-25_22-52-46.jpg" alt="" />
        </div>
      </div>
      <div className="landing navbar-actions">
        <div>
          <img src="src\assets\photo_2024-03-25_22-52-58.jpg" alt="" />
        </div>
        <div>
          <h1>Our Values</h1>
          <br />
          <br />
          <h4>
            BUCOOP is anchored in values that nurture community, transparency,
            and empowerment. We prioritize innovation and integrity, ensuring
            our services meet our members' evolving needs while fostering an
            inclusive environment where every member can thrive financially.
          </h4>
        </div>
      </div>

      {/* <footer className="footer">
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
              <h4>Join the Newsletter</h4>

              <h3>Email Address</h3>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};
export default About
