import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.findOne("FqFszrAQ2uLS5TXdr"))
          Roles.addUsersToRoles("FqFszrAQ2uLS5TXdr", ['admin']);
});
