// Returns logged in members IGN

Template.ign.helpers({
  ign: function() {
    return Meteor.user().profile.ign;
  }
});
Template.admin.helpers({
  admin: function() {
    return Meteor.user().profile.admin;
  }
});


Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
