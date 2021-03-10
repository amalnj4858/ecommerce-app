import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage.js';
import Shoppage from './Pages/Shoppage/Shoppage.js'



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path ="/" component = {Homepage} />
          <Route exact path ="/shop" component = {Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
