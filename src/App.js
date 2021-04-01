import React from 'react';
import './App.css';
import {Redirect, Route,Switch} from 'react-router-dom';
import {auth,createUserIfNotExists} from './Firebase/Firebase.config.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/User-action';
import {currentUserSelector} from './Redux/User/User-selector.js';
import Homepage from './Pages/Homepage/Homepage.js';
import Shoppage from './Pages/Shoppage/Shoppage.js';
import Header from './Components/Header/Header.js';
import Signinpage from './Pages/Signinpage/Signinpage.js';
import Checkoutpage from './Pages/Checkoutpage/Checkoutpage.js';



class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    console.log(setCurrentUser);
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (user)=> {
      if(user){
       try{
        const userRef = await createUserIfNotExists(user);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              uid : snapshot.id,
                    ...snapshot.data()
          })
        })
      }catch(error){
        alert(error);
      }
    }
    else
      setCurrentUser(user);
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
      <Header />
      <Switch>
          <Route exact path ="/" component = {Homepage} />
          <Route path ="/shop" component = {Shoppage} />
          <Route exact path ="/signin"  render = {()=> this.props.currentUser? (<Redirect to='/'/>) : (<Signinpage />) } />
          <Route exact path = "/checkout" component = {Checkoutpage} />
      </Switch>
    </div>
  );
}
}

const matchDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
  
const matchStateToProps = (state) =>({
  currentUser : currentUserSelector(state)
})

export default connect(matchStateToProps,matchDispatchToProps)(App);
