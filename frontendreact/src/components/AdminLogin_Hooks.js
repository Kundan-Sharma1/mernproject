import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import {Card} from 'react-bootstrap';

function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "admin") && (adminpassword === "admin")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/adminafterlogin')

    }
    else
      setMessage('INVALID UID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

  }

  return (
    <div>

      <NavigationBar />
      <br /><br/>
      <h3 className='head'>ADMIN LOGIN</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <Card bg="#87E9ED" text="black" className="text-center p-3"  style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
      <div class="shadow p-3 color-white mb-5 rounded">
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={adminuserid}
          onChange={onChangeAdminUserId} placeholder="ADMIN USER ID"
          required  style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
            class = 'form-control'/>
        <br />
        <br />
        <input type="password" value={adminpassword}
          onChange={(e) => setAdminPassword(e.target.value)} placeholder="ADMIN PASSWORD"
          required  style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
            class='form-control'/>
        <br />
        <br />
        <br/>
        <input type="submit" value="ADMIN LOGIN" className="btn btn-primary" style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}} />
      </form>
      </div>
      </Card>
    </div>

  );
}
export default AdminLoginHooks