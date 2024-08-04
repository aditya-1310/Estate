
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "heaven-estate-b0f34.firebaseapp.com",
  projectId: "heaven-estate-b0f34",
  storageBucket: "heaven-estate-b0f34.appspot.com",
  messagingSenderId: "495247557511",
  appId: "1:495247557511:web:3efa0081e3d40e5beec922"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig); 