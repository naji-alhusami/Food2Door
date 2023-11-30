import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaQ1p8YODQdmBLsQIb-6sg709txQfTzfs",
  authDomain: "food-order-e25e0.firebaseapp.com",
  projectId: "food-order-e25e0",
  storageBucket: "food-order-e25e0.appspot.com",
  messagingSenderId: "449064754566",
  appId: "1:449064754566:web:f87204e5c3f8539d1fa007",
  measurementId: "G-9CFNWX9WS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
