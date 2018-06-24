

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNODXWqLDS6-p65LOMk-y50MJfmo5lr3k",
    authDomain: "comicnewsbot.firebaseapp.com",
    databaseURL: "https://comicnewsbot.firebaseio.com",
    projectId: "comicnewsbot",
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
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';//!!!!!!!!!!!!!!!!!!!!!!!
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

$("#submitAccount").on("click",function(event){
    event.preventDefault();
    
    var email=$("#emailInput").val();
    var password=$("#passwordInput").val();
    var passwordConfirm=$("#passwordConfirm").val();
    if(password===passwordConfirm){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
    else{
        alert("passwords do not match!");
    }
})

$("#signOut").on("click",function(){
    firebase.auth().signOut().then(function() {
        alert("signed out");
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
})
