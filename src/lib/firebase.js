
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcoE2CGJ_OM6EBCa6BJrmvirPLxgiNek0",
  authDomain: "trip-tip-78ed8.firebaseapp.com",
  projectId: "trip-tip-78ed8",
  storageBucket: "trip-tip-78ed8.appspot.com",
  messagingSenderId: "755536179123",
  appId: "1:755536179123:web:8f4363b5b86e746ca725c6",
  measurementId: "G-4EDG83LE3W"
};

// Initialize Firebase
const app = !firebase.apps.length && initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);