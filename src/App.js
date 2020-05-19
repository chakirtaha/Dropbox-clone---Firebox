import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Dashboard from './Components/HomePage/Dashboard'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'

import UploadFile from './Components/files/UploadFile'

import FilesDisplay from './Components/files/FilesDisplay' 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch> 
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/upload' component={UploadFile} />
            
            <Route exact path='/files' component={FilesDisplay} />
           
            <Route path='/'component={Dashboard} />
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
