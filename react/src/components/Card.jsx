
import { FaUserGraduate } from "react-icons/fa";
import "./card.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <div className="card-header">
        <FaUserGraduate size={35} />
        <h3>MSAJCE COLLEGE</h3>
        <p>STUDENT ID CARD</p>
      </div>

      <div className="card-body">

        <img
          src={student.image}
          alt={student.name}
        />

        <h2>{student.name}</h2>

        <p><b>ID:</b> {student.id}</p>
        <p><b>Department:</b> {student.department}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Email:</b> {student.email}</p>

      </div>

      <div className="card-footer">
        VALID STUDENT
      </div>

    </div>
  );
}

export default StudentCard;
