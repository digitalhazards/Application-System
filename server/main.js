import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.users.findOne("rq5znWeJHspyMA95s"))
        Roles.addUsersToRoles("rq5znWeJHspyMA95s", ['admin']);
});
