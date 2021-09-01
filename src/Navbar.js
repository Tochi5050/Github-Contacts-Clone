import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
   
        return (
        <div style={{backgroundColor: 'blue'}}>
           <nav className="navbar">
           
           <h1 style={{color:'white'}}>  <i className="bi bi-github"></i> Github Finder </h1>
        <ul>

        <li>
        <Link to='/Home'> Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

       
        </ul>


        </nav>
        </div>
    )
        
}

export default Navbar















