import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.users.findOne("nrf4yqomexhgFkR8Y"))
          Roles.addUsersToRoles("nrf4yqomexhgFkR8Y", ['admin']);

  if(!Meteor.roles.findOne({name: "craftingmanager"}))
          Roles.createRole("craftingmanager");

  if(!Meteor.roles.findOne({name: "medevialmanager"}))
          Roles.createRole("medievalmanager");

  if(!Meteor.roles.findOne({name: "magicrevolutoinmanager"}))
          Roles.createRole("magicrevolutoinmanager");
});
