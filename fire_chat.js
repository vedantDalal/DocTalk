var config = {
    apiKey: "AIzaSyDvvnPLQMzF3JOdg-ddsdV5sah6FpEpOsY",
    authDomain: "doctalkfinal-ce5b5.firebaseapp.com",
    databaseURL: "https://doctalkfinal-ce5b5.firebaseio.com",
    projectId: "doctalkfinal-ce5b5",
    storageBucket: "doctalkfinal-ce5b5.appspot.com",
    messagingSenderId: "1039956260614"
  };
  firebase.initializeApp(config);

  function goToChat(a){
      user = firebase.auth().currentUser.uid;
    if(a==0)
        var ref=firebase.database().ref('doctor/' + user);
    else 
        var ref=firebase.database().ref('patient/' + user);

    ref.on('value',function (snapshot){
        console.log(snapshot.val().email);
    })
}

