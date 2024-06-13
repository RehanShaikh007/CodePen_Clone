import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApHyOSP8NT1FEN81ZLoPS8q-45A23fdrw",
  authDomain: "mct-codepen.firebaseapp.com",
  projectId: "mct-codepen",
  storageBucket: "mct-codepen.appspot.com",
  messagingSenderId: "583487154643",
  appId: "1:583487154643:web:f29339b4b6a20e5eb42726",
  measurementId: "G-SL1P2QBGHH"
};

let app;
if (getApps().length === 0) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error("Error initializing Firebase app:", error);
  }
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };