import React from 'react'
import "./Navbar.css"
const Navbar = ()=>{
    return(
        
        <nav className="main-nav">
           <div className="logo">
               <h2>LOGOBAKERY</h2>
           </div>
           <div className="menu-link">
               <ul>
                   <li>Services</li>
                   <li>Projects</li>
                   <li>About</li>
               </ul>
           </div>
           <div >
               <button className="button">Contact</button>
           </div>
        </nav>
        
    );   
};

export default Navbar;