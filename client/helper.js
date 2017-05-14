// Returns logged in members IGN

Template.me.helpers({
    ign: function() {
        return Meteor.user().profile.ign;
        return Meteor.user().profile.admin;
    }
});


Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
