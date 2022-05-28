import React, {useState}from 'react'
import Illustration from "../../images/illustration-thank-you.svg"
import './ThanksCard.css'
export const ThanksCard = ({items}) => {
    console.log(items)
  return (
    <div className='Rating'>
        <div className='Illustration'>
        
            <img src={Illustration} className="illustrationImg"></img>
        </div>
        <p className='selectBtn'>You selected {items} out of 5</p>
        <h1 className='ThanksHeading'>
        Thank you!
        </h1>
        <p className='thanksContent'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    
    </div>
  )
}
