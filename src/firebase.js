import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBE-Y27Pu-4TvU6S8StVYZpfu-tlA7_NpY",
  authDomain: "elethon-43be7.firebaseapp.com",
  projectId: "elethon-43be7",
  storageBucket: "elethon-43be7.appspot.com",
  messagingSenderId: "62968592443",
  appId: "1:62968592443:web:ba2c6d62887a16c53a841e"
});

var db = firebaseApp.firestore();
export {db};