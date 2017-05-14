Meteor.publish('NetworkApps', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
      return NetworkApp.find({});
    } else {
      return NetworkApp.find({applicant: this.userId});
    }
});
