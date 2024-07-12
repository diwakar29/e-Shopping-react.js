// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFdI9k0ynTn_FkTnpeBj-sWOgIQqnBink",
  authDomain: "first-7b0e4.firebaseapp.com",
  projectId: "first-7b0e4",
  storageBucket: "first-7b0e4.appspot.com",
  messagingSenderId: "26520198200",
  appId: "1:26520198200:web:6fbe24d1bd3e5e3d4cdacd"
};


const app = initializeApp(firebaseConfig);
const  fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}
