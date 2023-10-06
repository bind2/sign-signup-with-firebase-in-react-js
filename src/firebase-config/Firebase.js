import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWRau_2rExKUc62DZQ6-bEVWeGFDkUVSE",
  authDomain: "user-authentication-8b4bf.firebaseapp.com",
  projectId: "user-authentication-8b4bf",
  storageBucket: "user-authentication-8b4bf.appspot.com",
  messagingSenderId: "454628078920",
  appId: "1:454628078920:web:e9a0d7eb51e2ec628a2f7d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
