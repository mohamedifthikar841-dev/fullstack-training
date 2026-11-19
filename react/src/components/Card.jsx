
import { FaUserGraduate } from "react-icons/fa";
import "./card.css";

function StudentCard({ student }) {

  const studentData = student || {};

  return (
    <div className="student-card">

      <div className="card-header">
        <FaUserGraduate size={35} />
        <h3>MSAJCE COLLEGE</h3>
        <p>STUDENT ID CARD</p>
      </div>

      <div className="card-body">

        <img
          src={studentData.image || "https://placehold.co/120"}
          alt={studentData.name || "Student"}
        />

        <h2>{studentData.name || "Student Name"}</h2>

        <p><b>ID:</b> {studentData.id || "N/A"}</p>

        <p><b>Department:</b> {studentData.department || "N/A"}</p>

        <p><b>Year:</b> {studentData.year || "N/A"}</p>

        <p><b>Email:</b> {studentData.email || "N/A"}</p>

      </div>

      <div className="card-footer">
        VALID STUDENT
      </div>

    </div>
  );
}

export default StudentCard;
