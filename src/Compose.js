import React from 'react'
import './Compose.css'

function Compose() {
  return (
    <div className='composecontainer'>

        <input type='email' placeholder='mailid' className='email'></input>
        <input type='text' placeholder='subject' className='text'></input>
        <textarea ></textarea>
        <button className='sentbtn'>sent</button>

      
    </div>
  )
}

export default Compose
