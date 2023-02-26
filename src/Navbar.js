

import * as React from "react";
import { Link } from "react-router-dom";


import './Navbar.css';

function Navbar() {
  return (
    <>
 <div className='Nav-vertical'>
    <h1 style={{color:'red'}}>Mail</h1>
    <ul className='Vertical-navitems'> 
       <li className='Navlist-vertical'><Link to='/' className=".link" style={{textDecoration:'none',color:"black"}}><h4>mail</h4></Link></li>
       <li className='Navlist-vertical'><Link to="/sent" style={{textDecoration:'none',color:"black"}}><h4>sent</h4></Link></li>
       <li className='Navlist-vertical'><Link to="/draft" style={{textDecoration:'none',color:"black"}}><h4>draft</h4></Link></li>
       <li className='Navlist-vertical'><Link to="/compose" style={{textDecoration:'none',color:"black"}}><h4>compose</h4></Link></li>
    </ul>
 </div>
 <div className='Nav-horizontal'>
    <div className='handburger-icon'>
        <div className='longline'></div>
        <div className='shortline'></div>
        <div className='longline'></div>
    </div>
    <h3 className="navusername">username</h3>

 </div>
    </>
  )
}

export default Navbar
