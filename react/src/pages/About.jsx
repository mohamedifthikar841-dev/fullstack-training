import {
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <div className="about-content">
        <p>Welcome to our college website</p>

        <p>
          <FaPhone /> Phone: 9876543210
        </p>

        <p>
          <FaMapMarkerAlt /> Address: Tamil Nadu, India
        </p>
      </div>
    </div>
  );
}

export default About;
