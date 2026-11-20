
import StudentCard from "../components/Card";

function Student() {

  const student = {
    name: "Mohamed Ifthikar",
    id: "101",
    department: "Computer Science",
    year: "III Year",
    email: "student@gmail.com",
    image: "https://via.placeholder.com/120"
  };

  return (
    <div>
      <StudentCard student={student} />
    </div>
  );
}

export default Student;
