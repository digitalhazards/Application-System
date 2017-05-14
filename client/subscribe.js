Meteor.subscribe('NetworkApps');

Template.myapps.helpers({
    NetworkApps: ()=> {
        return NetworkApp.find({});
    }
});
