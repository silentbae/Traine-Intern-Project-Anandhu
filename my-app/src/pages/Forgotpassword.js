import React from 'react';
import Reset from '../components/Password/Forgotpassword';
import  { useEffect} from "react";
function ResetPage() {
  useEffect(() => {
    document.title = "FORGOT PASSWORD";  
  }, []);   
  return (
    <div>
      <Reset />
    </div>
  );
}

export default ResetPage;
