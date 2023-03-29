import React from 'react'
import '../sass/add.sass'

function Add() {

    function activate(e){
        if(e.target.className == 'encadrementAdd'){
            e.target.className = 'encadrementAddBiss'
        }else{
            e.target.className = 'encadrementAdd'
        }
    }
    return (
        <div>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            <button className='encadrementAdd' onClick={activate}>
                <div className='svgAdd'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></div>
                <div className='textAdd'>
                    <h4>Online service</h4>
                    <p>Access to multiplayer games</p>
                </div>
                <div>+10$/yr</div>
            </button>
            <button className='encadrementAdd' onClick={activate}>
            <div className='svgAdd'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>
            <div className='textAdd'>
                    <h4>Larger storage</h4>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <div>+20$/yr</div>
            </button>
            <button className='encadrementAdd' onClick={activate}>
            <div className='svgAdd'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>
            <div className='textAdd'>
                    <h4>Customizable Profile</h4>
                    <p>Custom theme on your profile</p>
                </div>
                <div>+20$/yr</div>
            </button>
        </div>
    )
}

export default Add