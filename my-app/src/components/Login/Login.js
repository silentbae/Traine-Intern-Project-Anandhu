import React,{useState} from 'react'
import './Login.css';
import {images} from "../../assets/Images"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login (){
  const navigate = useNavigate();
  const [message,setMessage] =useState('');
  const [password,setPassword]=useState('');


  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is :',event.target.value);

  };
  const handleChange2 = event => {
    setPassword(event.target.value);

    console.log('value is :',event.target.value);

  };
  function loginClick(){

    if (message==="admin" && password==="admin"){
      navigate("/dashboard");
    }
  }



  return (
    
   <section>
    <div className="img-box">
    <img src={images.login} alt="Background"/>
    </div>
    <div className="contentbx">
      <div className="formbox">
        <h2>Login your account</h2>
        <form>
          <div className="inputbx">
            <span>Username</span>
            <input type="text" name="" onChange={handleChange}/>
          </div>
          <div className="inputbx">
            <span>Password</span>
            <input type="password" name=""onChange={handleChange2}/>
          </div>
          <div className="inputb">
            <input type="submit" value="Login" name=""onClick={loginClick}/>
          </div>
          <div className="inputb">
            
            <Link to="/forgotpassword" style={{ background : "none",color:'#463bfa', textDecoration: 'none' }}><p>Forgot password?</p></Link>
          </div>
        </form>
      </div>
    </div>
   </section> 

   
  )
}
export default Login;