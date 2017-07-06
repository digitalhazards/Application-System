import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=loginEmail]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);

        return false;
    }
});

// Register Logic
Template.register.events({
  'submit .regForm' : function(e, t) {
    e.preventDefault();
    var email = t.find('[name=registerEmail]').value
      , ign = t.find('[name=registerIGN]').value
      , password = t.find('[name=registerPassword]').value;


      // add logic

    Accounts.createUser({email: email, password : password, ign : ign}, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Logged in.");
          location.replace("/me");
        }

      });

      return false;
  }
});
