import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCSc1npgHjv6-bN4dasRutz5_YW0D8XX3c",
  authDomain: "moviesite-4a49f.firebaseapp.com",
  projectId: "moviesite-4a49f",
  storageBucket: "moviesite-4a49f.appspot.com",
  messagingSenderId: "178235357350",
  appId: "1:178235357350:web:931d62e41faf8521f01c67",
  measurementId: "G-WBBE85EC47"
};


export const app = initializeApp(firebaseConfig);