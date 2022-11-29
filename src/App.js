import "./App.css";
import Dashboard from "./components/pages/dashboard/Dashboard";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Students from "./components/pages/students/Students";
import Groups from "./components/pages/groups/Groups";

function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="App-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
