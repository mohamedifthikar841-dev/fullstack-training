import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";

const student = {
  id: "STU001",
  name: "Mohamed Ifthikar",
  department: "Computer Science",
  year: "3rd Year",
  email: "student@gmail.com",
  image: "https://i.pravatar.cc/150?img=12"
};

function Home() {
  return (
    <div className="home">

      <h1>Welcome to Student Portal</h1>

      <p>Manage your student identity cards easily.</p>

      <StudentCard student={student} />

      <Link to="/students" className="view-btn">
        View All Students
      </Link>

    </div>
  );
}

export default Home;