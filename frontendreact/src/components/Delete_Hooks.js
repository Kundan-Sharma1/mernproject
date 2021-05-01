import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import {Card} from 'react-bootstrap';

function Delete() {
  const [eemail, setEmpEmail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios.delete('http://localhost:4500/emp/remove/' + eemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <h3 className='head'>ENTER EMAIL ID FOR DELETE</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <br/><br/>
      <Card  bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class= "form-control" />
        <br />
        <br />
        <input type="submit" value="DELETE EMPLOYEE" className="btn btn-danger" style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'10rem'}} />
      </form>
      </Card>
    </div>
  )
}


export default Delete
