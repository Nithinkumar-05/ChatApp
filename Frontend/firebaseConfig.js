// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKP_yiUJ7hTtc9C07mbz1N4zPkYz2egcU",
  authDomain: "chatapp-7c681.firebaseapp.com",
  projectId: "chatapp-7c681",
  storageBucket: "chatapp-7c681.appspot.com",
  messagingSenderId: "685586140230",
  appId: "1:685586140230:web:84a85f8ee2327420bf0e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const roomsRef = collection(db, 'rooms');