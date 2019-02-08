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
  function writeDoctorData(email,psw,name,state,phno) {

    firebase.database().ref('doctor/' + email).set({
      password: psw,
      fname:name,
        stateOfResidence:state,
      contact:phno,
        });
    }

  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  var nameField = document.getElementById("f-name");
//   var regnoField = document.getElementById("med-reg-no");
  var stateField = document.getElementById("stateslist");
  var phField = document.getElementById("phone-no");
  var btSignup = document.getElementById("btSign");

  btSignup.addEventListener("click",e => {
    const email=emailField.value;
    const psw=pswField.value;
    const name = nameField.value;
    // const regno = regnoField.value;
    const state = stateField.options[stateField.selectedIndex].value;
    const phNo = phField.value;
    // console.log(name,regno,state,phNo);
 

    // writeDoctorData(email,psw,name,regno,state,phNo);
    const auth=firebase.auth();
    const promise=auth.createUserWithEmailAndPassword(email,psw);
    (promise.catch(e => alert(e.message)));
    writeDoctorData(email,psw,name,state,phno);
});
// btSignup.addEventListener("click",e => {
//     const email=emailField.value;
//     const psw=pswField.value;
//     console.log("asd-"+email+psw);
//     const auth=firebase.auth();
//     const promise=auth.createUserWithEmailAndPassword(email,psw);
//     promise
//             .catch(e => console.log(e.message));

//     // console.log(promise);

// })

firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log("not logged in");
    }
})



