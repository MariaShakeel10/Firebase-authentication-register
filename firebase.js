import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCBmG2mF8gRid9WX12upNEjESY_kJ9_Gk8",
    authDomain: "login-signup-6e626.firebaseapp.com",
    projectId: "login-signup-6e626",
    storageBucket: "login-signup-6e626.firebasestorage.app",
    messagingSenderId: "216160633900",
    appId: "1:216160633900:web:afd38976f3eeed5378fd89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the necessary functions and variables
export {
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    provider,
    GoogleAuthProvider,
    signInWithPopup
};
