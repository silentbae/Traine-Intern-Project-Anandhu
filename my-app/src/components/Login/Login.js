import React from 'react'
import './Login.css';
import {images} from "../../assets/Images"
import {Link} from "react-router-dom";

function Login (){
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
            <input type="text" name=""/>
          </div>
          <div className="inputbx">
            <span>Password</span>
            <input type="password" name=""/>
          </div>
          <div className="inputb">
            <Link to="/dashboard"><input type="submit" value="Login" name=""/></Link>
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