// App.js

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Projects } from './components/Projects';
import ProjectDetails from './components/ProjectDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/">
            {/* Route path="/projects" component={Projects} */}
            <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route exact path="/projects" component={Projects}/>
            
          
          {/* <Route path="/projects/projectId" render={(props) => {
            return (
              <>
                <h2>Projects Details</h2>
                <ProjectDetails {...props} />
              </>
            );
          }}/> */}
                

          <Route path="/projects/:projectId" component={ProjectDetails}/>
            
          

          <Route path="/login">
            <Redirect to = "/"/>
            <h2>This is the login page</h2>
          </Route>
        </Switch>
        
      </div>
    );
  }
}



export default App;
