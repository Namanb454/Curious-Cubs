import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import "firebase/firestore"
// import firebase from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkIE_mNYMGQ26obQ1QTktHXwMxX9JzIhM",
  authDomain: "curious-cubs.firebaseapp.com",
  projectId: "curious-cubs",
  storageBucket: "curious-cubs.appspot.com",
  messagingSenderId: "345321317519",
  appId: "1:345321317519:web:317f0210ce245ab3bf7cfa",
  measurementId: "G-30Z465KSY7"
};


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
// export default firebase
// const analytics = getAnalytics(app);

