import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA1_3k_3VGq0dpR1I8MsA6109PUuVGULq0",
    authDomain: "crown-clothing-77b77.firebaseapp.com",
    projectId: "crown-clothing-77b77",
    storageBucket: "crown-clothing-77b77.appspot.com",
    messagingSenderId: "1011680857572",
    appId: "1:1011680857572:web:23e508b9dc2d5e7d18cbf1",
    measurementId: "G-J2SHC09612"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); 
  }

export const auth = firebase.auth();
const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
  });
export const signInWithGoogle = ()=> firebase.auth().signInWithPopup(provider);

let name = null;

export const createUserIfNotExists = async (userAuth,additionalData) =>{
  if(!userAuth){
    return;
  }
  
  const docReference =  firestore.doc(`users/${userAuth.uid}`);
  const docSnapshot = await docReference.get();
  try{
  let {displayName,email} =  userAuth;
  if(!name)
    name = additionalData;
  if(!displayName)
    displayName = name;
  const dateJoined = new Date();
  if(!docSnapshot.exists){
    docReference.set({displayName,email,dateJoined}).then(()=>console.log('success'));
    }
  return docReference;
  }catch(error){
    console.log(error);
  }
}

export default firebase;
