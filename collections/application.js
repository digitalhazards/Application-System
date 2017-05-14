import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

NetworkApp = new Mongo.Collection('NetworkApp');

NetworkAppSchema = new SimpleSchema ({
    ign: {
        type: String,
        label: "IGN"
    },
    discordName: {
        type: String,
        label: "Discord Name"
    },
    memberlength: {
        type: String,
        label: "How long have you been a member at Digital Hazards?"
    },
    languageKnown: {
        type: String,
        label: "What languages do you know?",
        autoform: {
            type: 'textarea'
        }
    },
    whyyou: {
        type: String,
        label:"Why do you want to join the Network staff?",
        autoform: {
            type: 'textarea'
        }
    },
    applicant: {
        type: String,
        label: "Applicant",
        autoValue: function () {
            return this.userID();
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Applied At",
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }


});

NetworkApp.attachSchema( NetworkAppSchema );