// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCm3wGd2n7jucrFz9VaJ1-DBxH-EkTNDE",
  authDomain: "sebco-portfolio.firebaseapp.com",
  projectId: "sebco-portfolio",
  storageBucket: "sebco-portfolio.appspot.com",
  messagingSenderId: "920405552093",
  appId: "1:920405552093:web:4130e59c23a438a3b72434",
  measurementId: "G-P2HNM8Q90M"
};

/*const firebaseConfig = {

  apiKey: "AIzaSyDgohZ6izgV6oyeQdqsYilI_aCXIYMSNmw",

  authDomain: "sebco-1db08.firebaseapp.com",

  projectId: "sebco-1db08",

  storageBucket: "sebco-1db08.appspot.com",

  messagingSenderId: "871816575742",

  appId: "1:871816575742:web:20e01a4034bf0d61f843af",

  measurementId: "G-FG6PYYLKWK"

};*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
