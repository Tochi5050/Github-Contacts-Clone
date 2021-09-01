import React from 'react'

import {Link} from 'react-router-dom' 


function NowShowing({queried, using, uses}) {
    return (
        
        <div style={usedStyle}>
          
          { queried !== '' ? <div><i><span>Now Showing</span> {using.length} <span>of</span> {uses.length} 
          
          <Link to="/Show">Show All </Link></i> </div>
          : queried }
          
        </div>
        
    )
}

const usedStyle = {
marginLeft : '600px',
display : 'block'
}

export default NowShowing
