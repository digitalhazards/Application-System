Meteor.methods({
    'logs.clearlog'({ collection }) {
        logs.remove({});
    }
})