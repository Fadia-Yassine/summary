import React from 'react'
import '../sass/thank.sass'
import ThankYou from "../assets/img/thankyou.svg"

function Thank() {
  return (
    <div id='thank'>
        <img src={ThankYou}/>
        <h2>Thank you !</h2>
        <p id='thank'>
            Thanks for confirming yout subscription! We hope you have fun using our plateform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </div>
  )
}

export default Thank