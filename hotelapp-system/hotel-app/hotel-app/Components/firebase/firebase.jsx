// Import the functions you need from the SDKs you need
import firebase from 'firebase'

const Config = {
  apiKey: "AIzaSyBQDt-voHlry5yF5sa3xadTvS5Hhd07jHw",
  authDomain: "hotel-app-88921.firebaseapp.com",
  projectId: "hotel-app-88921",
  storageBucket: "hotel-app-88921.appspot.com",
  messagingSenderId: "48914044351",
  appId: "1:48914044351:web:bc58fb9e1a99057f943d0a",
  measurementId: "G-G0DLWHQD7L"
};

// Initialize Firebase
firebase.initializeApp(Config);

export default firebase.database()