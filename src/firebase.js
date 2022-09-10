
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQ41Z0k9Rbm84CFgvcZ73ay90sYutzKcA",
  authDomain: "expense-tracker-1d713.firebaseapp.com",
  databaseURL: "https://expense-tracker-1d713-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-1d713",
  storageBucket: "expense-tracker-1d713.appspot.com",
  messagingSenderId: "852138013408",
  appId: "1:852138013408:web:f5134004739a3b0daed685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)

export default app;