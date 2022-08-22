import React from 'react';
import  { useEffect} from "react";
import Home from '../components/Home/home'
function HomePage(){
    useEffect(() => {
        document.title = "DASHBOARD";  
      }, []);   
return(
    <div>
        
        <Home />
       
    </div>
);
}
export default HomePage;