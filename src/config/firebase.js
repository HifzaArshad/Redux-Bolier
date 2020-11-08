import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC-LctYYtiX0QOILWGTWqEoctKK0ZTgMD4",
    authDomain: "facebook-login-8c63f.firebaseapp.com",
    databaseURL: "https://facebook-login-8c63f.firebaseio.com",
    projectId: "facebook-login-8c63f",
    storageBucket: "facebook-login-8c63f.appspot.com",
    messagingSenderId: "272925133538",
    appId: "1:272925133538:web:72b411985399fb76ceecbb",
    measurementId: "G-2BX3QPQNV5"
  };
  
  
var Firebase= firebase.initializeApp(firebaseConfig);
export default Firebase;