  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCBmG2mF8gRid9WX12upNEjESY_kJ9_Gk8",
    authDomain: "login-signup-6e626.firebaseapp.com",
    projectId: "login-signup-6e626",
    storageBucket: "login-signup-6e626.firebasestorage.app",
    messagingSenderId: "216160633900",
    appId: "1:216160633900:web:afd38976f3eeed5378fd89"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  export{getAuth,createUserWithEmailAndPassword,app,auth,onAuthStateChanged}