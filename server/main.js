import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.findOne("5qwg82YYAeqM9tav6"))
          Roles.addUsersToRoles("5qwg82YYAeqM9tav6", ['admin']);
});
