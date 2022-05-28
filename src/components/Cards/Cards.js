import React,{useState} from 'react'
import './Cards.css'
import Icon from "../../images/icon-star.svg"

function Cards({toggle,setToggle,setItems,items}) {
    const Button =({number})=>{
       
        return <button className={items===number?"btn-active":"btn-static"} onClick={()=>setItems(number)}>{number}</button>
                
    }
   
    console.log(items)
  return (
      <>
    <div className='Rating'>
        <div className='bodyText'>
            <div className='iconImg'> 
            <img src={Icon}></img>
            </div>
            <h1 className='heading'>
             How did we do?
            </h1>
            <p className='content'>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
        </div>
             <div className='btn-div'>
                <Button number={1}/>
                <Button number={2} />
                <Button number={3} />
                <Button number={4} />
                <Button number={5} />
            </div>
                <div className='sub-btn'>
                    <button className='submit' onClick={()=>setToggle(!toggle)}>SUBMIT</button>
                 </div>
    </div>
    
    </>
  )
}

export default Cards