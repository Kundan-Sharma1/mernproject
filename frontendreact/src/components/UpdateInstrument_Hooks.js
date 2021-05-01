import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function UpdateInstrument(props) {
    const [iname, setInsName] = useState("");
    const [ino, setInsNo] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeInsName = (i) => setInsName(i.target.value);
    const onChangeInsNo = (i) => setInsNo(i.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`Form submitted:`);
        console.log(`NAME: ${iname}`);
        console.log(`No.: ${ino}`);

        const insinfo = {
            insname: iname,
            insno: ino,
        }

        axios.put('http://localhost:4500/emp/updateins', insinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Instrument UPDATED')
            })
            .catch(err => console.log(err))

        setInsName('')
        setInsNo('')

    }

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        let insname = sessionStorage.getItem('insname')
        if (insname == null)
            insname = props.name
            axios.get('http://localhost:4500/emp/search/ins/' + insname)
                .then(response => {
                    console.log(response.data)
                    const { insname, insno } = response.data[0]
                    setInsName(insname)
                    setInsNo(insno)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <NavigationBar />
            <br />
            <h3>PROFILE UPDATE</h3>
            <b style={{ color: "red" }}> {msg}</b>
            <form onSubmit={handleSubmit}>
                <label>NAME: </label> <br />
                <input type="text" value={iname}
                    onChange={onChangeInsName} placeholder="Enter Name"
                    readOnly />
                <br /><br />


                <label>QUANTITY: </label> <br />
                <input type="number" value={ino}
                    onChange={onChangeInsNo} placeholder="Enter Item Quantity"
                    required />
                <br /><br />


                <input type="submit" value="UPDATE Instrument" className="btn btn-success" />

            </form>
        </div>
    )
}

export default UpdateInstrument