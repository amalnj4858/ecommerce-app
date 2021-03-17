import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {auth,createUserIfNotExists} from './Firebase/Firebase.config.js';


import Homepage from './Pages/Homepage/Homepage.js';
import Shoppage from './Pages/Shoppage/Shoppage.js';
import Header from './Components/Header/Header.js';
import Signinpage from './Pages/Signinpage/Signinpage.js';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (user)=> {
      if(user){
       try{
        const userRef = await createUserIfNotExists(user);
        console.log(2);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser : {
              uid : snapshot.id,
                    ...snapshot.data()
               }
          },()=>{
            console.log(this.state);
          })
        })
      }catch(error){
        alert(error);
      }
    }
       
    
    else
      this.setState({currentUser:user});
    }
    )
  }


  componentWillUnmount(){
   this.unsubscribeFromAuth();
  }

  render()
  {
    return (  
    <div className="App">
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
          <Route exact path ="/" component = {Homepage} />
          <Route exact path ="/shop" component = {Shoppage} />
          <Route exact path ="/signin" component = {Signinpage}  />
      </Switch>
    </div>
  );
}
}

export default App;
