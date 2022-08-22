import React from 'react';
const Posts = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table>
      <thead>
          <tr>
            <th>Photo</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>DateofBirth</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Bloodgroup</th>
            <th>MobNumber</th>
            <th>Address</th>
            <th>State</th>
          </tr>
      </thead>
      <tbody>
          {data.map((user,index) => (
              <tr key={index}>
                 <td><img src={user.image}  width="50" height="50" alt="BigCo Inc. logo"/></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthDate}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.phone}</td>
                <td>{user.address.address},{user.address.city},{user.address.postalCode}</td>
                <td>{user.address.state}</td>
              </tr>
                ))}
      </tbody>
    </table>
  );
};

export default Posts;
