import React from 'react' ;

import {Router,Route}from'react-router-dom'
import Home from '../home';

function Container() {
 

    return (
      <div className="App">
        <Router>
          <Route element={<Home/>} path='/'/>
        </Router>
       
      </div>
    );
  }
  
  export default Container;
  