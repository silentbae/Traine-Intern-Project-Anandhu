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
      </Routes>
    </div>
  );
}

export default App;
