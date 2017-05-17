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


Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.myapps.helpers({
    NetworkApps: ()=> {
        return NetworkApp.find({});
    }
});
