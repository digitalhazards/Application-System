import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.findOne("Kfm7FbLLjyiMtu5bh"))
          Roles.addUsersToRoles("Kfm7FbLLjyiMtu5bh", ['admin']);
});
