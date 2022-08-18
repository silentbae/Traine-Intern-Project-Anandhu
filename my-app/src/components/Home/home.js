import React from 'react'
import "./home.css"
import {Link} from "react-router-dom";
import NavBar from "../Header/NavBar"
import Table from '../Table/Table'

function home() {
  return (
   <div className=" container">
      <div className="Nav">
        <NavBar />
      </div>
      <div className="topbar">
        <button className="btn-topbar"><Link to="/account/adduser" style={{ background : "none",color:'#463bfa', textDecoration: 'none' }}>ADD NEW</Link></button>
        <button className="btn-topbar">LOGOUT</button>  
      </div>
      <div className="head">
        <p>Welcome Back</p>
      </div>
      <div className="contents1 ">
        <Table/>
        
      </div>

      
   </div>
  )
}

export default home;
