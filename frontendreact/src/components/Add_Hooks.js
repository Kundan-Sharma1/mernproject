import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import {Card} from 'react-bootstrap';

function Add() {

    const [iname, setInsName] = useState("");
    const [ino, setInsNo] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeInsName = (i) => setInsName(i.target.value);
    const onChangeInsNo = (i) => setInsNo(i.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${iname}`);
        console.log(`Quantity: ${ino}`);

        const insinfo = {
            insname: iname,
            insno: ino
        }

        axios.post('http://localhost:4500/emp/add', insinfo)
            .then(res => {
                console.log(res.data)
                setMessage('ADD SUCCESSFUL')
            });

        setInsName('')
        setInsNo('')

    }

    return (
        <div>
            <NavigationBar />
            <br />
            <h3 className='head'>GYM NEW INSTRUMENT REGISTRATION</h3>
            <br/>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <br/>
            <Card bg="#87E9ED" text="black" className="text-center p-3" style={{ width:'22rem',height:'100%',margin:'0px auto',backgroundColor:'transparent'}}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={iname}
                    onChange={onChangeInsName} placeholder="Enter Name"
                    required style={{opacity:'0.7',borderRadius:'5px',
                    boxShadow:'5px 10px 18px black',width:'18rem'}} class='form-control' />
                <br /><br />

                <input type="number" value={ino}
                    onChange={onChangeInsNo} placeholder="Enter Quantity"
                    required style={{opacity:'0.7',borderRadius:'5px',
                    boxShadow:'5px 10px 18px black',width:'18rem'}} class='form-control' />
                <br /><br />

                <input type="submit" value="ADD" className="btn btn-success" style={{opacity:'0.8',borderRadius:'5px',boxShadow:'5px 10px 18px black',width:'10rem'}} />

            </form>
            </Card>
        </div>
    )
}


export default Add
