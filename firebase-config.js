import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCbPCYGSFb1R0aaOwzQs5jQnBWnewkX65M",
  authDomain: "liqourapp.firebaseapp.com",
  projectId: "liqourapp",
  storageBucket: "liqourapp.appspot.com",
  messagingSenderId: "941046389835",
  appId: "1:941046389835:web:9f0c421ae56bbcf82a01ce"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

export const auth = getAuth(app)