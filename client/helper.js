// Returns logged in members IGN

Template.ign.helpers({
  ign: function() {
    return Meteor.user().profile.ign;
  }
});
