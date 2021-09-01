import React, {useContext, useEffect} from 'react';
import ItemList from './ItemList'
import Spinner from './Spinner.js'
import NowShowing from './NowShowing'
import GithubContext from './components/GithubContext';


const Users = () =>  {

const context =  useContext(GithubContext)

const {query, updateQuery, loading, outputAlert, users , displayFetch } = context

useEffect(() => {
  displayFetch()
  
},[])

   const onSubmit = (e) => {
      e.preventDefault();
      if(query === ''){
        outputAlert('Please Type in an Input', 'light')
      }else {
          users.filter(c => (
          c.login.toLowerCase().includes(query.toLowerCase())
         ))
      }
    }
    
    
    
      const showContacts = query === '' ? users : 
      users.filter(c => (
        c.login.toLowerCase().includes(query.toLowerCase())
       ))
      
      
  

        if(loading){
          return <Spinner />
        }else{
          return (
            <div>
            <form onSubmit={onSubmit}>
            <input className="search-field" 
            type="text" 
            placeholder="Search here" 
            value={query} 
            onChange={(event) => updateQuery(event.target.value)}
            />
            <input style={buttonStyle} type='submit' value='Search' />
            </form>
            <NowShowing queried={query} using={showContacts} uses={users}/>
            <div style={userStyle}>
             {showContacts.map(user => (
               <ItemList key={user.id} userr={user} />
               ))}
            </div>
            </div>
            
               )

        }

        
        
    }

    const userStyle = {
        display: 'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        gridGap : '2rem',
        marginTop: '2rem' 
      }

    const buttonStyle = {
      color : 'black',
      width : '100%'
    }

export default Users
