import React from 'react'
import PropTypes from 'prop-types'



function RepoItem({repod}) {
    return (
        <div className="card">
         <h3>
         <a href={repod.html_url}>{repod.name}</a> 
         </h3>  
        </div>
    )
}

RepoItem.propTypes = {
    repod : PropTypes.object.isRequired
}

export default RepoItem
