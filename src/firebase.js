// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsvusH2AO2Eq4-9zeImArsmJqjGothxmA",
  authDomain: "sof-medical.firebaseapp.com",
  projectId: "sof-medical",
  storageBucket: "sof-medical.appspot.com",
  messagingSenderId: "300811792073",
  appId: "1:300811792073:web:50e1b8adf448aa0173e718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, getDocs, addDoc };