import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { Card } from 'react-bootstrap';

function UserLogin(props) {
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('http://localhost:4500/emp/logincheck', emplogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].empemail)
        sessionStorage.setItem("username", res.data[0].empname)
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
  }

  return (
    <div>
      <NavigationBar />
      <br /><br/><br/>
      <h3 className='head'>USER LOGIN</h3>
      <br/>
      <b style={{ color: "red" }}> {msg} </b>
      <Card bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
      <div class="shadow p-3 color-white mb-5 rounded">
      <form onSubmit={handleSubmit}>
        <input type="email" class="form-control" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="Enter Email"
          required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}} />
        <br /><br />

        <input type="password" class="form-control" value={epass}
          placeholder="Enter Password"
          onChange={onChangeEmpPass}
          required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}/>
        <br /><br /><br/>
        <input type="submit" value="LOGIN" className="btn btn-success" style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}/>
      </form>
      </div>
      </Card>
    </div>
  )
}

export default UserLogin
