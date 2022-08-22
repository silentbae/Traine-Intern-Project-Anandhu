import React from 'react';
import Login from '../components/Login/Login';
import  { useEffect} from "react";

function LoginPage() {
  useEffect(() => {
    document.title = "LOGIN";  
  }, []); 
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
