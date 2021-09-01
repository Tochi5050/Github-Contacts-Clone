import React from 'react'
import {Link} from 'react-router-dom'


function ItemList ({userr}) {
    return (
        <div className='text-center'>
        <div>
        
        </div>
        <img src={userr.avatar_url} alt="" style={{width : '60px'}} className='round-img'/>
        <h3>{userr.login}</h3>
        <Link to={`/usersProfile/${userr.login}`} className='btn btn-dark btn-sm my-1'>More</Link>
     </div>
    )

}

export default ItemList
