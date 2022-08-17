import './Table.css'
import {images} from "../../assets/Images"
import React, { useState, useEffect } from 'react';


function Table() {
    const [data, getData] = useState([])
    const URL = 'https://dummyjson.com/users?limit=10&skip=80';

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log("data-->",response);
              if(response){
                  getData(response.users&&response.users);
              }
          })
  }
  return (
    <table>
      <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date Of Birth</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Bloodgroup</th>
            <th>Mob Number</th>
            <th>Address</th>
            <th>State</th>
            <th>Action</th>

          </tr>
      </thead>
      <tbody>
          {data.map((user,index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthDate}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.phone}</td>
                <td>{user.address.address}</td>
                <td>{user.address.state}</td>
                <td><img src={images.edit} alt="Edit" width="25" height="25"/><img src={images.delete} width="25" height="25" alt="Delete"/></td>
              </tr>
                ))}
      </tbody>
    </table>

  );
}

export default Table;