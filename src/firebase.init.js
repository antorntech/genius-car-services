// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApQ-Wj40ahAJ5IsPBbDkcnfg-pldGu5n4",
  authDomain: "genius-car-services-becde.firebaseapp.com",
  projectId: "genius-car-services-becde",
  storageBucket: "genius-car-services-becde.appspot.com",
  messagingSenderId: "158389189984",
  appId: "1:158389189984:web:d18147c874bec9a66c7205",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
