// Returns logged in members IGN

Template.ign.helpers({
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
