import React from 'react'
import "./Adduser.css"
import Sidebar from '../Header/Sidebar'
function Adduser() {
  return (
   <div className=" container">
      <div className="Nav">
        <Sidebar/>
      </div>
      <div className="top-bar">
          
      </div>
      <div className="head">
        <p>ADD User</p>
      </div>
      <div className="content">
        <form>
          <div className="left">
            <div className="input-box">
              <label>First name :</label>
              <input type="text" name=""/>
            </div>
            <div className="input-box">
              <label>Last name :</label>
              <input type="text" name=""/>
            </div>
            <div className="input-box">
              <label>Nick name :</label>
              <input type="text" name=""/>
            </div>
            <div className="input-box">
              <label>Date of Birth :</label>
              <input type="text" name=""/>
            </div>
            <div className="input-box">
              <label>Start Date :</label>
              <input type="text" name=""/>
            </div>
            <div className="input-box">
              <label>Gender :</label>
              <select name="gender" id="gender" >
                    <option value="">Select</option>  
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
              </select>
            </div>
            <div className="input-box">
              <label>Email :</label>
              <input type="password" name=""/>
            </div>
         </div>
         <div className="right">
            <div className="input-box">
              <label>Address :</label>
              <input className="add" type="password" name=""/>
            </div>
            <div className="input-box">
              <label>Contact number :</label>
              <select name="contactcode" id="contactcode">
                    <option value="">Select</option>  
                    <option value="+91">+91</option>   
              </select><br></br>
            </div>
            <div className="input-box">
              <label>Contact number:</label>
              <input type="password" name=""/>
            </div>
            <div className="input-box">
              <label>Status :</label>
              <select name="status" id="status">
                    <option value="">Select</option>  
                    <option value="waiting">waiting</option>  
                    <option value="approved">approved</option>  
              </select><br></br>
            </div>
            <div className="input-box">
              <label>Photo :</label>
              <input type="file" id="photo" name="photo"/>
            </div>
            <div className="input-box">
                <input type="submit" value="Save" id="save"/><br></br>
            </div>
         </div>
        </form>
      </div>
   
   </div>
  )
}

export default Adduser;
