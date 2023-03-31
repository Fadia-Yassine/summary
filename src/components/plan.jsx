import React, { useState } from 'react'
import '../sass/plan.sass'
import Arcade from '../assets/img/arcade.svg'
import Advenced from '../assets/img/advenced.svg'
import Pro from '../assets/img/pro.svg'

function Plan() {
    // récupération des données 
    let [arcade, setArcade] = useState('$9/mo')
    let [advanced, setAdvanced] = useState('$12/mo')
    let [pro, setPro] = useState('$15/mo')

    function yearly(){
        //condition d'affichage
        if(arcade == '$9/mo'){
            setArcade('$90/yo')
            setAdvanced('$120/yo')
            setPro('$150/yo')
            document.getElementById('buttonPlan').style='justify-content: flex-end'
        }
        else {
            setArcade('$9/mo')
            setAdvanced('$12/mo')
            setPro('$15/mo') 
            document.getElementById('buttonPlan').style='justify-content: flex-start'
        }
    }

    //séléction des cases
    function selected(e){
        if(e.target.style.border== 'none'){
            e.target.style.border= '2px solid purple'
        } else {
            e.target.style.border= 'none'
        }
    }

    return (
        <div>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div>
                <button className='btnPlan' onClick={selected}>
                    <img src={Arcade} />
                    <h3>Arcade</h3>
                    <p>{arcade}</p>
                </button>
                <button className='btnPlan' onClick={selected}>
                    <img src={Advenced} />
                    <h3>Advenced</h3>
                    <p>{advanced}</p>
                </button>
                <button className='btnPlan' onClick={selected}>
                    <img src={Pro} />
                    <h3>Pro</h3>
                    <p>{pro}</p>
                </button>

                <div id='div2Plan'>Monthly <button id='buttonPlan' onClick={yearly}><div id='btnPlan'>.</div></button> Yearly</div>
            </div>
        </div>
    )
}

export default Plan