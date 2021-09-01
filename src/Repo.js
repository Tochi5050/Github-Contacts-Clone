import React,{useContext} from 'react'
import RepoItem from './RepoItem'
import GithubContext from './components/GithubContext'

const Repo = () => {
 const context = useContext(GithubContext)   
 const {repos} = context  
   return (
        <div>
           {repos.map(repo =>{
               return <RepoItem key={repo.id} repod={repo}/>
           }) }
        </div>
    )
}



export default Repo
