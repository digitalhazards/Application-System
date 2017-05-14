// Returns logged in members IGN

Template.me.helpers({
    ign: function() {
        return Meteor.user().profile.ign;
    }
});

Template.nav.helpers({
    ign: function() {
        return Meteor.user().profile.ign;
    },
    isManagerUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
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


Template.adminui.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
});

Template.admin.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
})
