import React, {useReducer} from 'react'
import GithubContext from './GithubContext'
import {
  SET_USER,
  SET_LOADING,
  GETUSER_REPOS,
  OUTPUT_ALERT,
  UPDATE_QUERY,
  REMOVE_ALERT,
  SET_USERS
} from './types'



const githubReducer = (state , action) =>{
  switch (action.type){
    case UPDATE_QUERY :
      return {
        ...state,
        query : action.payload
        }  

    case SET_LOADING:
      return {
        ...state,
        loading : true
      }

    case GETUSER_REPOS:
      return {
        ...state,
        repos : action.payload,
        loading : false
      }

      case SET_USER:
        return {
          ...state,
          user : action.payload,
          loading : false
        }

      case OUTPUT_ALERT:
        return {
          ...state,
          alert : action.payload
        }

        case REMOVE_ALERT:
        return {
          ...state,
          alert : null
        }

        case SET_USERS:
        return{
          ...state,
          users : action.payload,
          loading : false
        }

    default:
    return state
  }
}





export default function GithubState(props) {
    const initialState = {
      users: [],
      user: {},
      loading:false,
      repos:[],
      query:'',
      alert:null
    }
    
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const setLoading = () => {
      dispatch({
        type : SET_LOADING
      })
    }

    const updateQuery = (query) => {
      dispatch({
       type : UPDATE_QUERY,
       payload : query.trim()
     })
    }

    
      const displayFetch = () => {
        setLoading()

        fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
         .then(res => res.json())
         .then(data => (
           dispatch({
             type : SET_USERS,
             payload : data
           })
           ))
           
         } 
         

    const getUserRepos = async userName => {

      setLoading()
       
       const res = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
       const data = await res.json()
       
    dispatch({
      type : GETUSER_REPOS,
      payload : data
    })
    
    
     }

     const displayProfile = async (userName) =>{
      setLoading()
      
      const res = await fetch(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      const data = await res.json()
      
      dispatch({
        type : SET_USER,
        payload : data
      })
    }

    const outputAlert = (msg , type) =>{
     dispatch({
       type : OUTPUT_ALERT,
       payload : {msg , type}
     })
  
      setTimeout(() => dispatch({
        type : REMOVE_ALERT
      }), 5000)
    }
  
    
    
    return (
        <GithubContext.Provider value={{
          users : state.users,
          user : state.user,
          loading : state.loading,
          repos : state.repos,
          query : state.query,
          alert : state.alert,
          updateQuery,
          getUserRepos,
          displayProfile,
          setLoading,
          outputAlert,
          displayFetch
          
        }}>
           {props.children}  
        </GithubContext.Provider>
            
        
    )
}

