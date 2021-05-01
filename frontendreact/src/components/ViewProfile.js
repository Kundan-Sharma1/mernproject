import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';

function ViewProfile() {
  const [emplist, setEmpList] = useState([]);
  const [status, setStatus] = useState(false);



  

    axios.get('http://localhost:4500/emp/search/' + sessionStorage.getItem('useremail'))
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
    
  

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empsession}</td>
          <td>{currentrow.empaddress}</td>
          <td>{currentrow.empheight}</td>
          <td>{currentrow.empweight}</td>
        </tr>
      );
    });
  }


    return (
      <div>
        <NavigationBar />
        <br />

        <h3 className='head'>YOUR DETAILS</h3>
        <br/><br/>
        <Table stripped border hover size="sm" bordered variant='dark'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Session</th>
              <th>Address</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            {viewEmpList()}
          </tbody>
        </Table>
      </div>
    )
  }



export default ViewProfile
