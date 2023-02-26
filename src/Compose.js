import React from 'react'
import './Compose.css'

function Compose() {
  return (
    <div className='composecontainer'>

        <input type='email' placeholder='mailid' className='email'></input>
        <input type='text' placeholder='subject' className='text'></input>
        <textarea ></textarea>
        <div className='btndiv'> 
        <button className='sentbtn'>sent</button>
        <button className='sentbtn'>save</button>
        </div>
       

      
    </div>
  )
}

export default Compose
