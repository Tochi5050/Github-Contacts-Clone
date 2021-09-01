import React, {useContext} from 'react'
import GithubContext from './components/GithubContext'

const Alert = () => {
const context = useContext(GithubContext) 
const {alert} =context
    return (
alert !== null && (
<div className={`alert alert-${alert.type}`}>
<i className="bi bi-exclamation-circle-fill" />{alert.msg}
</div>
)
    )
}

export default Alert
