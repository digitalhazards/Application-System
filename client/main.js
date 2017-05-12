import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// URL Routes
Router.route('/', function () {
    this.render('base');
});

Router.route('/status', function () {
    this.render('status');
});

Router.route('/networkapplications', function () {
    this.render('NetworkApplication');
});
Router.route('/myapp', function () {
    this.render('myapp');
});
Router.route('/register', function () {
    this.render('register');
});


// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=loginEmail]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);
          if (err) {
            console.log(err);
          }  else {
            console.log("Logged in " + ign);
          }
    }
});

// Register Logic
Template.register.events({
  'submit .regForm' : function(e, t) {
    e.preventDefault();
    var email = t.find('[name=registerEmail]').value
      , ign = t.find('[name=registerIGN]').value
      , password = t.find('[name=registerPassword]').value;


      // Trim and validate the input

    Accounts.createUser({email: email, password : password, ign : ign}, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Logged in.");
          location.replace("/myapp");
        }

      });
  }
});
