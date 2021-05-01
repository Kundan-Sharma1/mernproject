import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import {Card} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Search() {
  const [emplist, setEmpList] = useState([]);
  const [eemail, setEmpEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('http://localhost:4500/emp/search/' + eemail)
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

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

  if (status === false) {
    return (<div>
      <NavigationBar />
      <br />
      <h3 className="head">ENTER EMAIL ID FOR SEARCH</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <br/>
      <br/>
      <Card  bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control" />
        <br />
        <br />
        <input type="submit" value="SEARCH MEMBER" className="btn btn-success"  style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'10rem'}}/>
      </form>
      </Card>
    </div>);
  }
  else {
    return (
      <div>
        <NavigationBar />
        <br />
        <h3 className='head'>ENTER EMAIL ID FOR SEARCH</h3>
        <br/>
        <b>{msg}</b>
        <Card  bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
        <form onSubmit={handleSubmit}>
          <input type="email" value={eemail}
            onChange={onChangeEmpEmail} placeholder="EMAIL ID"
            required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control" />
          <br />
          <br />
          <input type="submit" value="SEARCH MEMBER" className="btn btn-success" style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'10rem'}}/>
        </form>
        </Card>
        <br /><br />

        <h3>EMPLOYEE DETAILS</h3>
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
}

export default Search
