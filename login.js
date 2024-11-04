import{
    auth, getAuth,onAuthStateChanged,signInWithEmailAndPassword
 } from "./firebase.js"

 onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid) 
      
    } else {
      console.log('User is signed out') 
      // ...
    }
  });

  let login=document.getElementById("login")
  login.addEventListener("click",(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire("Sign Up successful!");
    setInterval(window.location.href = "index.html", 60000) // Change to your desired URL
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire("Please try again");
  });
  })