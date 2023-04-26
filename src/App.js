import React from 'react' 
import './index.css'

import {
   Routes,
   Route,
 } from 'react-router-dom';

import Home from './companents/home';
import Started from './companents/started';
import SideBar from './sideBar';

function App() {
  return (<>
      <Routes>
      <Route path='/' element={<SideBar/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/started' element={<Started/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
