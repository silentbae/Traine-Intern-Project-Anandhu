import React from 'react'
import "./home.css"
import {Link} from "react-router-dom";
import SideBar from "../Header/Sidebar"
import Table from '../Table/Table'

function home() {
  return (
   <div className=" container">
      <div className="Nav">
        <SideBar />
      </div>
      <div className="top-bar">
        <button className="btn-top-bar"><Link to="/account/adduser" style={{textDecorationLine:'none'}}>ADD NEW</Link></button>
        <button className="btn-top-bar"><Link to="/" style={{textDecorationLine:'none'}} >LOGOUT</Link></button>  
      </div>
      <div className="head">
        <p>Welcome Back</p>
      </div>
      <div className="contents">
        <Table/>
      </div>
   </div>
  )
}

export default home;
