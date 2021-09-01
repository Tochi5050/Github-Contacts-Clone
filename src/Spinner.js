import React from 'react'
import spinner from './spinner.gif'


function Spinner() {
    return (
        <div >
          <img src={spinner} alt="Loading" style={imgStyle}/> 
           <p style={loadStyle}>Loading...</p> 
        </div>
    )
}

const imgStyle = {
    margin: 'auto',
    width : '120px',
    display : 'block'
}

const loadStyle = {
    display : 'block',
    marginLeft: '650px'
}

export default Spinner

