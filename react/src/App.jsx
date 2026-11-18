import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card name="ifthikar" department="CSE" year="III" />
        <Card name="rickshan" department="Mech" year="III" />
        <Card name="asan" department="IT" year="IV" />
        <Card name="sanjay" department="ECE" year="II" />
      </div>
    </>
  );
}

export default App;