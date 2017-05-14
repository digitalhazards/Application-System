import SimpleSchema from 'simpl-schema';

NetworkApp = new Mongo.Collection('NetworkApp');

NetworkAppSchema = new SimpleSchema ({
    discordName: {
        type: String,
        label: "Discord Name"
    },
    languageKnown: {
        type: String,
        label: "What languages do you know?"
    },
    applicant: {
        type: String,
        label: "Applicant",
        autoValue: function () {
            return this.userID();
        },
    },
    createdAt: {
        type: Date,
        label: "Applied At",
        autoValue: function () {
            return new Date();
        }
    }


});

NetworkApp.attachSchema( NetworkAppSchema );