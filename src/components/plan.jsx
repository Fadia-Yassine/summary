import React, { useState } from 'react'
import '../sass/plan.sass'


function Plan() {
    let [name, setName] = useState('');
    let [mail, setMail] = useState('');
    let [phone, setPhone] = useState('');

    function nom (){
        setName(input.value)
        console.log(input.value);
    }

  return (
    <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email adress, and phone number.</p>

        <div className='divPlan'>
            <span> Your name is : {name}</span><br />
            <input type="text" placeholder='your name' onChange={nom}/>
        </div>
        <div className='divPlan'>
            <span>Your email is :</span><br />
            <input type="text" placeholder='vingt_six@email.com' />
        </div>
        <div className='divPlan'>
            <span>Your phone number is : </span><br />
            <input type="text" placeholder='e.g. +1 234 567 890' />
        </div>

    </div>
  )
}

export default Plan