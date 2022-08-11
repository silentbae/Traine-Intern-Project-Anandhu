import React from 'react'
import './Login.css';
import {images} from "../../assets/Images"

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
          <div className="inputbx">
            <input type="submit" value="Login" name=""/>
          </div>
          <div className="inputbx">
            <p>Forgot password?</p>
          </div>
        </form>
      </div>
    </div>
   </section> 

   
  )
}
export default Login;