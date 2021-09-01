import React, {useContext} from 'react'
import ItemList from './ItemList'
import GithubContext from './components/GithubContext'

function ShowAll (){
const context = useContext(GithubContext)  
const {users, } = context  


    
    return (
        
        <div style={userStyle }>
           {users.map(usedddd => {
               return <ItemList key={usedddd.id} userr={usedddd} />
           })} 
        </div>
        
    )

}


const userStyle = {
    display: 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '2rem',
    marginTop: '2rem' 
  }

export default ShowAll
