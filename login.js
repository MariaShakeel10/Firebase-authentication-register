
import{
    auth,app,createUserWithEmailAndPassword,onAuthStateChanged
}from "./firebase.js"

// theme
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')

    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()


// registeration
const register = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;})
}
// log out
const logOut=()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }})
}
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const loginButton = document.getElementById('login');
    const logOutButton = document.getElementById('logOut');

    if (themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', register);
    }

    if (logOutButton) {
        logOutButton.addEventListener('click', logOut);
    }
});

