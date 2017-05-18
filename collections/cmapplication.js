import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

//Create Collection
CMApp = new Mongo.Collection('CMApp');


// Collection permissoins
CMApp.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

//DB SimpleSchema
CMAppSchema = new SimpleSchema({
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
  serverNumber: {
    type: String,
    label: "Which server do you play on?",
    optional: false,
    autoform: {
      type: "select",
      options: function() {
        return [{
          label: "Server One",
          value: 1
        }, {
          label: "Server Two",
          value: 2
        }]
      }
    }
  },
  modMajors: {
    type: String,
    label: "What mods do you 'major' in?",
    optional: false,
    autoform: {
      type: "textarea"
    }
  },
  scenarioRacist: {
    type: String,
    label: "You see someone being racist in chat, how do you handle it?",
    optional: false,
    autoform: {
      type: "textarea"
    }
  },
  scenarioSpawn: {
    type: String,
    label: "Someone is asking for creatively spawned in items, how do you handle it?",
    optional: false,
    autoform: {
      type: "textarea"
    }
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
    label: "Applied At",
    //denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) return new Date();
    },
    autoform: {
      type: "hidden"
    }
  },
  status: {
    type: String,
    label: "Status",
    autoValue: function() {
      if (this.insert) return "Pending";
    },
    autoform: {
      type: "hidden",
    }
  }
});

CMApp.attachSchema(CMAppSchema)
