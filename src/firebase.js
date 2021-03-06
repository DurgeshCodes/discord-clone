import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAkZrD4L8-kWAb2nivHCMjzcWUyKYnBUU",
  authDomain: "discord-clone-1a07c.firebaseapp.com",
  projectId: "discord-clone-1a07c",
  storageBucket: "discord-clone-1a07c.appspot.com",
  messagingSenderId: "759993795154",
  appId: "1:759993795154:web:bc4c14f833665f26f2158b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
