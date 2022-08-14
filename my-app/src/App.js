import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Dashboard from './pages/Dashboard';
import Message from './pages/Messages';

function App() {
  return (
    <div>  
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="about" element={<Forgotpassword />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
