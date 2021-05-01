import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import './Registration.css';
import { Card, Container } from 'react-bootstrap';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [esession, setEmpSession] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [eheight, setEmpHeight] = useState("");
    const [eweight, setEmpWeight] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpGender = (e) => setEmpGender(e.target.value);
    const onChangeEmpSession = (e) => setEmpSession(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);
    const onChangeEmpHeight = (e) => setEmpHeight(e.target.value);
    const onChangeEmpWeight = (e) => setEmpWeight(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empsession: esession,
            empaddress: eaddress,
            empheight : eheight,
            empweight : eweight
        }

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpSession('')
        setEmpAddress('')
        setEmpHeight('')
        setEmpWeight('')

    }

    return (
        <div>
            <NavigationBar />
            <br />
            <h3 className="head">GYM REGISTRATION FORM</h3>
            <Card bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
            <div className="Reg1">
            <div class="shadow p-3 color-white mb-5 rounded">
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" class="form-control" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}/>
                <br /><br />

                <input type="email" class="form-control" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    />
                <br /><br />

                <input type="number" value={emobile} class="form-control"
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    />
                <br /><br />

                <input type="date" value={edob}
                    onChange={onChangeEmpDOB} 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control"
                    />
                <br /><br />

                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control"
                    />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={onChangeEmpGender}
                    class = "form-control" />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender}
                    class = "form-control"
                    />
                <label>Female</label>
                <br /><br />

                <label>SESSION: </label> <br />
                <select value={esession} onChange={onChangeEmpSession} 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control">
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                </select>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
                    onChange={onChangeEmpAddress} rows="3" 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control">
                </textarea>
                <br /><br />

                <input type="number" value={eheight}
                    onChange={onChangeEmpHeight} placeholder="Enter Height in cm"
                    required 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control" />
                <br /><br />

                <input type="number" value={eweight}
                    onChange={onChangeEmpWeight} placeholder="Enter Weight in Kgs"
                    required 
                    style={{opacity:'0.7',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control"
                    />
                <br /><br />

                <input type="submit" value="REGISTER" 
                style={{opacity:'1',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'18rem'}}
                    class = "form-control" className="btn btn-success"/>
                
            
            </form>
            </div>
            </div>
            </Card>
        </div>
    )
}


export default Registration
