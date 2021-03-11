import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage.js';
import Shoppage from './Pages/Shoppage/Shoppage.js';
import Header from './Components/Header/Header.js';
import Signinpage from './Pages/Signinpage/Signinpage.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path ="/" component = {Homepage} />
          <Route exact path ="/shop" component = {Shoppage} />
          <Route exact path ="/signin" component = {Signinpage} />
      </Switch>
    </div>
  );
}

export default App;
