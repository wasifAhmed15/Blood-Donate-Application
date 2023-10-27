// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkawm0FlZtkqMN_O8ymo5V7ipzGew1wRc",
  authDomain: "blood-donat-7392f.firebaseapp.com",
  projectId: "blood-donat-7392f",
  storageBucket: "blood-donat-7392f.appspot.com",
  messagingSenderId: "273859209891",
  appId: "1:273859209891:web:462b654dc35b83c3dd6d16",
  measurementId: "G-E2S9ND3W55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);