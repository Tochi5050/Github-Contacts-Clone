import React, {Fragment, useEffect, useContext} from 'react'
import Spinner from './Spinner'
import Repo from './Repo'
import {Link} from 'react-router-dom'
import GithubContext from './components/GithubContext'

function UsersProfile ({match}) {
    const context = useContext(GithubContext)
    const {getUserRepos,repos, displayProfile, loading, user} = context

    useEffect(() => {
        
        displayProfile(match.params.login)
        getUserRepos(match.params.login)
        


    }, [] )



   
        const {name, 
            login, 
            avatar_url, 
            html_url, 
            location, 
            bio, 
            blog, 
            followers, 
            following, 
            public_repos, 
            public_gists, 
            hirable } = user;

        

        if(loading) return <Spinner /> 

    return (
        <Fragment>
            <Link to ='/Home' className="btn " style={{backgroundColor:'blue', color:'white'}}>
            Click to return to Home  
             </Link>  
          Hirable : {' '}

         {hirable ? <i class="bi bi-person-check-fill"></i>:<i class="bi bi-person-x-fill"></i>}

         <div className="card grid-2">
           <div className="all-center" >
             <img src={avatar_url} className="round-img" alt="Avatar" style={{width : '150px'}}/>
             <h1>{login}</h1>
             <p>Location : {location}</p>
           </div>
           <div>
           <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer" style={{height : '40px', width : '250px', borderRadius : '5px', backgroundColor:'blue'}} >Visit Github Profile</a>
           {blog && (
               <Fragment>
                   <p><strong>Website:</strong> {blog}</p>
               </Fragment>
           )}
         </div>
         </div>
         <div className="card text-center" >
          <div style={StyleBtn}>
          <div className="badge " style={{backgroundColor:'blue', color:"white"}}>Followers: {followers}</div>
          <div className="badge " style={{backgroundColor:'blue' , color:"white"}}>Following : {following}</div>
          <div className="badge " style={{backgroundColor:'blue' , color:"white"}}>Public Repos : {public_repos}</div>
          <div className="badge " style={{backgroundColor:'blue' , color:"white"}}>Public Gists : {public_gists}</div>
          </div>
         </div>

         
          <Repo repos={repos}/>
         
        </Fragment>
    )

}

const Card = {
    display : 'flex',
    width :'50%'
}


const Card1 = {
    backgroundColor : 'blue',
    height : '10rem',
    margin : 'auto',
    width: '25%',
    borderRadius : '.8rem',
    marginTop : '2rem'

}

const Card2 = {
    backgroundColor : 'blue',
    height : '10rem',
    margin : 'auto',
    width: '25%',
    borderRadius : '.8rem',
    marginTop : '2rem'
}

const StyleBtn = {
    margin : 'auto',
    display : 'flex',
    width : '150px',
    justifyContent : 'center'
    
}
export default UsersProfile
