// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmd1CMZDRpDPilk1Kl7tIa0ehFGuixY9Y",
  authDomain: "via-shop-2fb36.firebaseapp.com",
  projectId: "via-shop-2fb36",
  storageBucket: "via-shop-2fb36.appspot.com",
  messagingSenderId: "909306865446",
  appId: "1:909306865446:web:865c2fec6025bd6379c3e7",
  measurementId: "G-QNDC0CLQRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
	db, analytics as default
}