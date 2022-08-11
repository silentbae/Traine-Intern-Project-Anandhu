import React from 'react'
import './Forgot.css';
import {images} from "../assets/images"
function Reset(){
  return (
    <section>
        <div className="img-box">
            <img src={images.password} alt="Background"/>
        </div>
        <div className="contentbx">
          <div className="formbox">
            <h2>Forgot Password</h2>
            <p>Enter your email and we'll send you a link to reset password.</p>
            <form>
              <div className="inputbx">
                <span>Email Address</span>
                <input type="text" name=""/>
              </div>
              <div className="inputbx">
                <input type="submit" value="Submit" name=""/>
              </div>
            </form>
          </div>
        </div>
    </section>
  )}
  export default Reset;