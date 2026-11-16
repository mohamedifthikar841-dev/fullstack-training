import Navbar from './components/navbar';
import StudentProfile from './components/StudentProfile';
import WelcomeDashboard from './components/WelcomeDashboard';




function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeDashboard />
      <StudentProfile />
    </div>
  );
}

export default App;