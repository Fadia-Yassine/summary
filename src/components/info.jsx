import React, { useRef, useState } from 'react'
import '../sass/info.sass'


function Info() {
    let [name, setName] = useState('');
    let [mail, setMail] = useState('');
    let [phone, setPhone] = useState('');

    function nom (e){
        setName(e.target.value)
        console.log(e.target.value);
    }
    function email (e){
        setMail(e.target.value)
        console.log(e.target.value);
    }
    function tel (e){

        setPhone(e.target.value)
        console.log(e.target.value);
    }

  return (
    <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email adress, and phone number.</p>

        <div className='divPlan'>
            <span> Your name is : {name}</span><br />
            <input type="text" placeholder='your name' value={name} onChange={nom}/>
        </div>
        <div className='divPlan'>
            <span>Your email is : {mail}</span><br />
            <input type="text" placeholder='vingt_six@email.com' value={mail} onChange={email}/>
        </div>
        <div className='divPlan'>
            <span>Your phone number is : {phone}</span><br />
            <input type="text" placeholder='e.g. +1 234 567 890' value={phone} onChange={tel}/>
        </div>

    </div>
  )
}

export default Info