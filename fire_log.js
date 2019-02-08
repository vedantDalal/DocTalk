  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvvnPLQMzF3JOdg-ddsdV5sah6FpEpOsY",
    authDomain: "doctalkfinal-ce5b5.firebaseapp.com",
    databaseURL: "https://doctalkfinal-ce5b5.firebaseio.com",
    projectId: "doctalkfinal-ce5b5",
    storageBucket: "doctalkfinal-ce5b5.appspot.com",
    messagingSenderId: "1039956260614"
  };
  firebase.initializeApp(config);

  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  const btLogin = document.getElementById("btlogin");

  btLogin.addEventListener("click",e => {
    const email=emailField.value;
    const psw=pswField.value;
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,psw);
    promise.catch(e => alert(e.message));
    window.location.href.replace("doctor_login","doctor_home");

})


firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log("not logged in");
    }
})