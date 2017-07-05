// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
        Router.go('/me');
    }
});

// Register Logic
Template.register.events({
  'submit form' : function() {
    event.preventDefault();
    var email = $('[name=email]').val()
      , ign = $('[name=IGN]').val()
      , password = $('[name=password]').val();


      // add logic

    Accounts.createUser({email: email, password : password, ign : ign}, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Logged in.");
          location.replace("/me");
        }

      });
  }
});
