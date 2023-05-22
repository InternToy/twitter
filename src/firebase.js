import firebase from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDj-pY5xDxKEXjKU2oxs2zxQ5_DCww1bbE",
  authDomain: "twitter-f3ca5.firebaseapp.com",
  databaeURL: "https://twitter-f3ca5.firebaseio.com",
  projectId: "twitter-f3ca5",
  storageBucket: "twitter-f3ca5.appspot.com",
  messagingSenderId: "670869414281",
  appId: "1:670869414281:web:012b029c17557680b18158",
  measurementId: "G-LV87E1HD6T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;












