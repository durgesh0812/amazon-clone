// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjie-ayqyIfvxO2te-j0yxu0FXOtxK400",
  authDomain: "ecommerce-store-298d0.firebaseapp.com",
  projectId: "ecommerce-store-298d0",
  storageBucket: "ecommerce-store-298d0.appspot.com",
  messagingSenderId: "981503370627",
  appId: "1:981503370627:web:5a8e2c72ac192693c002b6",
  measurementId: "G-B6Q4NS6EZ5"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export  {db,auth};