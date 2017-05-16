Meteor.publish('NetworkApps', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
      return NetworkApp.find({});
    } else {
      return NetworkApp.find({applicant: this.userId});
    }
});

Meteor.publish('CMApps', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
      return CMApp.find({});
    } else {
      return CMApp.find({applicant: this.userId});
    }
});

Meteor.publish('MTApps', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
      return MTApp.find({});
    } else {
      return MTApp.find({applicant: this.userId});
    }
});

Meteor.publish('MRApps', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
      return MRApp.find({});
    } else {
      return MRApp.find({applicant: this.userId});
    }
});
