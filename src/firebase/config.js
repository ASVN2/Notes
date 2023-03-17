import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmyHrB2-Oq5F27IMIafw1INRVlexMITcU',
  authDomain: 'notetaker-4aa4a.firebaseapp.com',
  projectId: 'notetaker-4aa4a',
  storageBucket: 'notetaker-4aa4a.appspot.com',
  messagingSenderId: '353300868810',
  appId: '1:353300868810:web:dc383cce3da8350e91ce33',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
