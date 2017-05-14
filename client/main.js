import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// URL Routes
Router.route('/', function () {
  this.render('base');
});

Router.route('/apply/network', function () {
    this.render('NetworkApplication');
    Router.onAfterAction(function () {
        document.title = "Apply for Network"
    })
});

Router.route('/me', function () {
    this.render('me');
    Router.onAfterAction(function () {
      document.title = "Me"
    })
});

Router.route('/register', function () {
    this.render('register');
    Router.onAfterAction(function () {
        document.title = "Register"
    })
});

Router.route('/positions', function () {
    this.render('positions');
    Router.onAfterAction(function () {
        document.title = "Positions"
    })
});

Router.route('/apply/cm/mod', function () {
    this.render('CMModApp');
    Router.onAfterAction(function () {
        document.title = "CM Mod Application"
    })
});


// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=loginEmail]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);
    }
});

// Register Logic
Template.register.events({
  'submit .regForm' : function(e, t) {
    e.preventDefault();
    var email = t.find('[name=registerEmail]').value
      , ign = t.find('[name=registerIGN]').value
      , password = t.find('[name=registerPassword]').value;

    // Password Logic <div class="alert alert-warning" role="alert">...</div>
    if (email = ""){
      $('.errorSpawn').append('<div class="alert alert-warning" role="alert"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;Email is Empty!</div>');
    }
    else if (password = "") {
      $('.errorSpawn').append('<div class="alert alert-warning" role="alert"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;Password is Empty!</div>');
    }
    else if (ign = "") {
      $('.errorSpawn').append('<div class="alert alert-warning" role="alert"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;In Game Name is Empty!</div>');
    }


      // Trim and validate the input

    Accounts.createUser({email: email, password : password, ign : ign, admin : admin}, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Logged in.");
          location.replace("/myapp");
        }

      });
  }
});
