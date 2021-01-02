// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTEtiLn9zxXkpWnXU68HldKdFGZmjXEdE",
  authDomain: "mini-6b1c3.firebaseapp.com",
  projectId: "mini-6b1c3",
  storageBucket: "mini-6b1c3.appspot.com",
  messagingSenderId: "292396757914",
  appId: "1:292396757914:web:6115e717330e1c2eed0023",
  measurementId: "G-JQ4KZ90SN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
