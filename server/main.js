import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.findOne("x5keSanPKaWnsdxc8"))
          Roles.addUsersToRoles("x5keSanPKaWnsdxc8", ['admin']);
});
