Meteor.publish('NetworkApps', function () {
    return Recipes.find({applicant: this.userId});
});