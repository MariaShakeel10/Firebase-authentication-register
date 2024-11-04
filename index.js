import{
    auth, getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut 
 } from "./firebase.js"


//   logout
let logOut=document.getElementById("LogOut")
logOut.addEventListener("click",(e)=>{
    signOut(auth).then(() => {
        console.log("user logout successfully");
        
       }).catch((error) => {
       console.log(error);
       
       });
})
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