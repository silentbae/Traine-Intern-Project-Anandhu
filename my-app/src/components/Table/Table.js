import './Table.css'
import {images} from "../../assets/Images"
import userdetails from '../../assets/data/data'


function Table() {
  return (
    <table style={{
      backgroundColor: 'blue',
      
    }}>
  <tr>
    <th>Name</th>
    <th>Nick Name</th>
    <th>Date Of Birth</th>
    <th>Start Date</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Address</th>
    <th>Mob Number</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  
    {userdetails.map((data,index)=>(
      <tr style={{background:'#FF0000'}}>
        <td>{data.name}</td>
        <td>{data.nickname}</td>
        <td>{data.date}</td>
        <td>{data.start}</td>
        <td>{data.gender}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        <td>{data.mobile}</td>
        <td>{data.status}</td>
        <td><img src={images.edit} alt="Edit" width="25" height="25"/><img src={images.delete} width="25" height="25" alt="Delete"/></td>
      </tr>
    ))}
  
  
  
</table>

  );
}

export default Table;