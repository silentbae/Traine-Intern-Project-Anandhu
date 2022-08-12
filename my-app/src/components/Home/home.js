import React from 'react'
import "./home.css"
import NavBar from "../Header/NavBar"
import Table from '../Table/Table'

function home() {
  return (
   <div className=" container">
      <div className="Nav">
        <NavBar />
      </div>
      <div className="topbar">
        <button className="btn-topbar">ADD NEW</button>
        <button className="btn-topbar">LOGOUT</button>  
      </div>
      <div className="head">
        <p>Welcome Back</p>
      </div>
      <div className="content">
        <Table/>
      </div>
   </div>
  )
}

export default home;
