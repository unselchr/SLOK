

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-A-yUDMS-iTlwR3ueb9gOnAAy5BkYWLc",
  authDomain: "nationstates3-288aa.firebaseapp.com",
  databaseURL: "https://nationstates3-288aa.firebaseio.com",
  projectId: "nationstates3-288aa",
  storageBucket: "",
  messagingSenderId: "660818086311"
};
firebase.initializeApp(config);
//end initialize

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
//create uiConfig object

//set up to allow email logins and not require screen name
ui.start('#firebaseui-auth-container', {//!!!!!!!!!!!!!!!!!!
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});
//done starting ui


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      //document.getElementById('loader').style.display = 'none';//!!!!!!!!!!!!!!!!!!!!!!!
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'index.html',//!!!!!!!!!!!!!!!!!
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID//,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};
//
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);//!!!!!!!!!!!!!!!!!!!!!!!

$("#submitAccount").on("click", function (event) {
  event.preventDefault();

  var email = $("#emailInput").val();
  var password = $("#passwordInput").val();
  var passwordConfirm = $("#passwordConfirm").val();
  if (password === passwordConfirm) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
      console.log(error.code);
      console.log(errorMessage);
      // ...
    });
  }
  else {
    alert("passwords do not match!");
  }
})

$("#signOut").on("click", function () {
  firebase.auth().signOut().then(function () {
    alert("signed out");
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
})
$("#TEST").on("click", function () {
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }
  $("#userID").text(email);
})
firebase.auth().onAuthStateChanged(function (user) {
  var user = firebase.auth().currentUser;
  if (user != null) {
    // User is signed in.
    console.log("user " + user.uid + " has logged in");
    $(".visibleSignedIn").css("display", "list-item");
    $(".visibleSignedOut").css("display", "none");
    var userName
    firebase.database().ref("/users/" + user.uid).once("value").then(function (snapshot) {
      userName = snapshot.val().userName;
      $(".userName").text(userName);
    })
  } else {
    // No user is signed in.
    console.log("no user logged in");
    $(".visibleSignedIn").css("display", "none");
    $(".visibleSignedOut").css("display", "list-item");
  }
});

//below is code for the myAccount page

