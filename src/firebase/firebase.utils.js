import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config= {
    apiKey: "AIzaSyCkxWjk32BE3DuzhLTRrg04vpZ8Do6-RT4",
    authDomain: "crwn-db-8a52d.firebaseapp.com",
    projectId: "crwn-db-8a52d",
    storageBucket: "crwn-db-8a52d.appspot.com",
    messagingSenderId: "618131126723",
    appId: "1:618131126723:web:8395151a4b7ffa2f466576"
  };


  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:"select_account" })
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;