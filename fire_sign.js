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
  function writeDoctorData(email,psw,state,phno) {

    firebase.database().ref('doctor').push().set({
      email:email,
      password:psw,
      
      stateOfResidence:state,
      contact:phno
        },
        function(error) {
          if (error) {
            alert("Data could not be saved." + error);
          } else {
              window.location.assign("doctor_home.html");
          }
        });

    }

  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  var nameField = document.getElementById("f-name");
  var regnoField = document.getElementById("med-reg-no");
  var stateField = document.getElementById("stateslist");
  var phField = document.getElementById("phone-no");
  var btSignup = document.getElementById("btSign");

  btSignup.addEventListener("click",e => {
    const email=emailField.value;
    const psw=pswField.value;
    const name = nameField.value;
    const regno = regnoField.value;
    const state = stateField.options[stateField.selectedIndex].value;
    const phno = phField.value;
    // console.log(name,regno,state,phNo);
 if(email==""||psw==""||name==""||state==""||phno==""||regno=="")
{

}
else{
    const auth=firebase.auth();
    const promise=auth.createUserWithEmailAndPassword(email,psw);
    (promise.then(function (){writeDoctorData(email,psw,state,phno);}).catch(e => alert(e.message)));
}
});


firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log("not logged in");
    }
})



