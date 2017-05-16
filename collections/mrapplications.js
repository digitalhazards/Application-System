import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Create Collection
MRApp = new Mongo.Collection('MRApp');


// Collection permissoins
MRApp.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
});

//DB SimpleSchema
MRAppSchema = new SimpleSchema({
  ign: {
    type: String,
    label: "Minecraft IGN (In-Game Name)",
    optional: false
  },
  discordName: {
    type: String,
    label: "What is your Discord Name",
    optional: false
  },
  age: {
    type: Number,
    label: "How old are you?",
    optional: false
  },
  memberlength: {
    type: String,
    label: "How long have you been playing?",
    optional: false
  },
  playtime: {
    type: String,
    label: "How often are you online?",
    optional: false
  },
  previousStaff: {
    type: String,
    label: "What servers have you staffed before?",
    optional: false,
    autoform: {
      type: "textarea"
    }
  },
  whyyou: {
    type: String,
    label: "Why should we allow you to be a staff member?",
    optional: false,
    autoform: {
      type: "textarea"
    }
  },
  createdAt: {
    type: Date,
    label: "Applied At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  },
  applicant: {
    type: String,
    label: "Applicant",
    autoValue: function() {
      return Meteor.userId();
    },
    autoform: {
      type: "hidden"
    }
  },
  status: {
    type: String,
    label: "Status",
    autoValue: function() {
      return "Pending";
    },
    autoform: {
      type: "hidden",
    }
  }
});

MRApp.attachSchema(MRAppSchema)
