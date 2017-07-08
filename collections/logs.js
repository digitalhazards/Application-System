import SimpleSchema from 'simpl-schema';

logs = new Mongo.Collection("logs");

logs.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return false;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

LogsSchema = new SimpleSchema({
    "text": {
        type: String,
    }
});


logs.attachSchema(LogsSchema);