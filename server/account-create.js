// Adds the IGN to the Meteor.user() object

Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   user.profile.ign = options.ign;
   return user;
});
