import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Create Collection
MTApp = new Mongo.Collection('MTApp');


// Collection permissoins
MTApp.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

//DB SimpleSchema
MTAppSchema = new SimpleSchema({
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
  applicant: {
    type: String,
    label: "Applicant",
    autoValue: function() {
      if (this.isInsert) return Meteor.userId();
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    autoform: {
      type: "hidden"
    },
    autoValue() {
      if (this.isInsert) return new Date();
    },
  },
  status: {
    type: String,
    label: "Status",
    autoValue() {
      if (this.isInsert) return "Pending";
    },
    autoform: {
      type: "hidden",
    }
  }
});

MTApp.attachSchema(MTAppSchema)
