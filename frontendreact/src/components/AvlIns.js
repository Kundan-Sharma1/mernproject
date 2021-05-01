import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';

function AvlIns() {
    const [inslist, setInsList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
    axios.get('http://localhost:4500/emp/ins/')
        .then(response => {
        console.log(response.data)
        setInsList(response.data);
        })
        .catch((error) => {
        console.log(error);
        })
    }, [])

function viewInsList() {
    return inslist.map((currentrow, index) => {
        return (
        <tr key={index}>
            <td>{currentrow.insname}</td>
            <td>{currentrow.insno}</td>
        </tr>
        );
    });
}

return (
    <div>
      <NavigationBar />
      <br />
      <h3 className='head'>ALL INSTRUMENTS</h3>
      <br/><br/>
      <Table stripped border hover size="sm" bordered variant='dark'>
        <thead>
          <tr>
            <th>Name</th>
            <th>QUANTITY</th>
          </tr>
        </thead>

        <tbody>
          {viewInsList()}
        </tbody>
      </Table>
    </div>
  )
}


export default AvlIns