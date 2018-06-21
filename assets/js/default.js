
$("#signOut").on("click",function(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
})
$("#signIn").on("click",function(){
    var email=$("#loginEmail").val();
    var password=$("#loginPassword").val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
})