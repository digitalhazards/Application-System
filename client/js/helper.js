// Returns logged in members IGN

Template.me.helpers({
    ign: function() {
        return Meteor.user().profile.ign;
    }
});

Template.nav.helpers({
    ign: function() {
        return Meteor.user().profile.ign;
    }
});

// Log out user
Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

// Show all applications that user submitted from NetworkApp collection
Template.myapps.helpers({
    NetworkApps: ()=> {
        return NetworkApp.find({});
    }
});
