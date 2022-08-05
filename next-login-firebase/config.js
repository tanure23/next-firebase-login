import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpd8P-RH1AK0VDzOXWiE6f5ADiw1tYpoU",
    authDomain: "next-login-firebase-4d673.firebaseapp.com",
    projectId: "next-login-firebase-4d673",
    storageBucket: "next-login-firebase-4d673.appspot.com",
    messagingSenderId: "710105195304",
    appId: "1:710105195304:web:b55f2acf1f0aa9a087e61d"
  };

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}