import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import UpdateInstrument from './UpdateInstrument_Hooks'
import Table from 'react-bootstrap/Table';

function ManageIns() {
  const [inslist, setInsList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [insname, setInsName] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/emp/ins')
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
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.insname}</td>
          <td>{currentrow.insno}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger" style={{opacity:'0.6'}}>Delete</button></td>
          <td><button onClick={() => updateRow(index)} className="btn btn-primary" style={{opacity:'0.6'}}>Update</button></td>
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempinslist = [...inslist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempinslist.splice(index, 1);
    console.log(removerow[0].insname)
    axios.delete('http://localhost:4500/emp/delete/' + removerow[0].insname)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setInsList(tempinslist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID Name')
      })
  }

  function updateRow(index) {
    var tempinslist = [...inslist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempinslist.splice(index, 1);
    console.log(removerow[0].insname)
    setStatus(false)
    setInsName(removerow[0].insname)
  }

  if (status === true) {
    return (
      <div>
        <NavigationBar />
        <br />
        <h3 className='head'>Instrument DETAILS</h3>
        <br/>
        <b style={{ color: "red" }}>{msg}</b>
        <br/>
        <Table stripped border hover size="sm" bordered variant='dark'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {viewInsList()}
          </tbody>
        </Table>
        <br/><br/>
        <Link to="/add" className="btn btn-primary" style={{opacity:'0.6'}}> Add Ins </Link>
      </div>
    )
  }
  else {
    return (
      <div>
        <UpdateInstrument name={insname} />
      </div>
    )
  }
}

export default ManageIns
