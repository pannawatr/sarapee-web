import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4b8LR6x_kO0wxMdPb3Eu_Q1E-zTIjQI",
  authDomain: "sarapee-database.firebaseapp.com",
  projectId: "sarapee-database",
  storageBucket: "sarapee-database.appspot.com",
  messagingSenderId: "959798148675",
  appId: "1:959798148675:web:f0aa6614566c114da15ef6",
  measurementId: "G-L32FN82Q7H",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
