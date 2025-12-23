import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGSF1iDZSt4B7baebOX1ooUg4tknoJE4I",
    authDomain: "rarekraft.firebaseapp.com",
    projectId: "rarekraft",
    storageBucket: "rarekraft.firebasestorage.app",
    messagingSenderId: "969256678372",
    appId: "1:969256678372:web:dc41bd748120ba30d38df1"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
