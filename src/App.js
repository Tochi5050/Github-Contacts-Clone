import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UsersProfile from './UsersProfile'
import GithubState from './components/GithubState'
import Navbar from './Navbar'
import './App.css'
import Users from './Users'
import Alert from './Alert'
import About from './About'
import ShowAll from './ShowAll'





const App = () => {
  return (
    <GithubState>
    <Router>
     
     <Navbar />
      
     <Alert />

     

     <Switch>
     <Route exact path="/About" component={About}/>
        

       <Route exact path="/Show">
       <ShowAll />
        
       </Route>

      
      <Route exact path="/Home">
        <Users  />
     </Route>

     <Route exact path='/usersProfile/:login' component={UsersProfile} />
     

     </Switch>
   
     
    </Router>
    </GithubState>
    
  )
  
}




export default App;
