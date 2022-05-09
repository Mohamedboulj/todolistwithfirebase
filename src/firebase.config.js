// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getfirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPVI2EnumzACdruKq1N3HNB6F3ynzATE",
  authDomain: "todo-reactapplication.firebaseapp.com",
  projectId: "todo-reactapplication",
  storageBucket: "todo-reactapplication.appspot.com",
  messagingSenderId: "557091171428",
  appId: "1:557091171428:web:267683cd2d7ac12a02c371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getfirestore(app);

export {db};