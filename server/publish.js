Meteor.publish('NetworkApps', function () {
    return NetworkApp.find({applicant: this.userId});
});