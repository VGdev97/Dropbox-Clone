// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHm2FvgmWFr_NchZ_v0EdELb8iZJru7o",
  authDomain: "dropbox-clone-70103.firebaseapp.com",
  projectId: "dropbox-clone-70103",
  storageBucket: "dropbox-clone-70103.appspot.com",
  messagingSenderId: "313755891530",
  appId: "1:313755891530:web:5390dbacbc608b16e0b3b3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
