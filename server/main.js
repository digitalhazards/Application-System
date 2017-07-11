import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.users.findOne("kMdoqv3mAG6wzNdQe"))
        Roles.addUsersToRoles("kMdoqv3mAG6wzNdQe", ['admin', 'superadmin']);



});
