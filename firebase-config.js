import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbdjmsUWfFooP-R9xfNB1mjNfgT2Q0mJQ",
  authDomain: "gastosvue.firebaseapp.com",
  databaseURL: "https://gastosvue.firebaseio.com",
  projectId: "gastosvue",
  storageBucket: "gastosvue.appspot.com",
  messagingSenderId: "1026932042493",
  appId: "1:1026932042493:web:907ec4b1ca28277baeac94",
  measurementId: "G-YNTNVK3Y79",
  // apiKey: process.env.GATSBY_PUBLIC_FIREBASE_API_KEY,
  // authDomain: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}firebaseapp.com`,
  // databaseURL: `https://${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  // projectId: process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: `${process.env.GATSBY_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  // messagingSenderId: "1026932042493",
  // appId: "1:1026932042493:web:907ec4b1ca28277baeac94",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
