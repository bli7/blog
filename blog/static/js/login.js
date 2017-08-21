console.log("blah");

// (function() {

console.log("grrr");

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyChPA11z95Ywk8i70ODREz5nfyOE4OIIX0",
    authDomain: "just-picit.firebaseapp.com",
    databaseURL: "https://just-picit.firebaseio.com",
    projectId: "just-picit",
    storageBucket: "just-picit.appspot.com",
    messagingSenderId: "430592203035"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail=document.getElementById('txtEmail');
  const txtPassword= document.getElementById('txtPassword');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignUp=document.getElementById('btnSignUp');
  const btnLogout=document.getElementById('btnLogout');

  // add Login event
  btnLogin.addEventListener('click', e =>{
    //get Email and pass
    const email = txtEmail.value;
    const pass= txtPassword.value;
    const auth= firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });
  //Add signUp eve
  btnSignUp.addEventListener('click', e=> {
    // TODO: Check 4 real Emailz
    const email = txtEmail.value;
    const pass= txtPassword.value;
    const auth= firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => constole.log(e.message));
  });
  btnLogOut.addEventListener('click', e=> {
    firebase.auth().signOut();
  });

   // Add a realtime listener
   firebase.auth().onAuthStateChanged(firebaseUser => {
     if(firebaseUser) {
       console.log(firebaseUser);
       btnLogout.classList.remove('hide');
     } else {
       console.log('not logged in');
       btnLogout.classList.add('hide');
     }
   });

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "#";

  }
});

 // });
