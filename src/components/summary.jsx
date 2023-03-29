import React from 'react'
import '../sass/summary.sass'

function Summary() {
  return (
    <div>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div id='divSummary'>
            <div> 
                <div>Advanced(Yearly)</div>
                <div id='change'>Change</div>
            </div>
            <div>$120/yr</div>
        </div>
        <div id='divSummary2'>
            <div>Total (per year)</div>
            <div>$120/yr</div>
        </div>
    </div>
  )
}

export default Summary