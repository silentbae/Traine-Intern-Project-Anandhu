import React from 'react'
import "./Adduser.css"
import Navbar from '../Header/NavBar'
function Adduser() {
  return (
   <div className=" container">
      <div className="Nav">
        <Navbar/>
      </div>
      <div className="topbar">
          
      </div>
      <div className="head">
        <p>ADD User</p>
      </div>
      <div className="content">
        <form>
          <div className="left">
            <div className="inputbx">
              <label>First name :</label>
              <input type="text" name=""/>
            </div>
            <div className="inputbx">
              <label>Last name :</label>
              <input type="text" name=""/>
            </div>
            <div className="inputbx">
              <label>Nick name :</label>
              <input type="text" name=""/>
            </div>
            <div className="inputbx">
              <label>Date of Birth :</label>
              <input type="text" name=""/>
            </div>
            <div className="inputbx">
              <label>Start Date :</label>
              <input type="text" name=""/>
            </div>
            <div className="inputbx">
              <label>Gender :</label>
              <select name="gender" id="gender" >
                    <option value="">Select</option>  
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
                    </select><br></br>
            </div>
            <div className="inputbx">
              <label>Email :</label>
              <input type="password" name=""/>
            </div>
         </div>
         <div className="right">
            <div className="inputbx">
              <label>Address :</label>
              <input className="add" type="password" name=""/>
            </div>
            <div className="inputbx">
              <label>Contact number :</label>
              <select name="contactcode" id="contactcode">
                    <option value="">Select</option>  
                    <option value="+91">+91</option>   
              </select><br></br>
            </div>
            <div className="inputbx">
              <label>Contact number:</label>
              <input type="password" name=""/>
            </div>
            <div className="inputbx">
              <label>Status :</label>
              <select name="status" id="status">
                    <option value="">Select</option>  
                    <option value="waiting">waiting</option>  
                    <option value="approved">approved</option>  
              </select><br></br>
            </div>
            <div className="inputbx">
              <label>Photo :</label>
              <input type="file" id="photo" name="photo"/>
            </div>
            <div className="inputbx">
                <input type="submit" value="Save" id="save"/><br></br>
            </div>
         </div>
        </form>
      </div>
   
   </div>
  )
}

export default Adduser;
