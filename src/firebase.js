
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCc9YcVKqkb3nxBbBc1XV8oLXLGvAJYACc",
  authDomain: "netflixclone-570f2.firebaseapp.com",
  projectId: "netflixclone-570f2",
  storageBucket: "netflixclone-570f2.appspot.com",
  messagingSenderId: "731319412658",
  appId: "1:731319412658:web:fcb45c4bf5c5fc28ea26ab",
  measurementId: "G-XC13XSGB4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export { auth };
export default db;