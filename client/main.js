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

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=loginEmail]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);
    }
});
