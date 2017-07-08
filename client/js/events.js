Template.NetworkApplication.events({
  'submit form': function (e, t) {
    Router.go('/me/applications');
  }
})
Template.CMModApp.events({
  'submit form': function (e, t) {
    Router.go('/me/applications');
  }
})
Template.MTApp.events({
  'submit form': function (e, t) {
    Router.go('/me/applications');
  }
})

Template.MRApp.events({
  'submit form': function (e, t) {
    Router.go('/me/applications');
  }
})

Template.admin.events({
    'click .clearLogs': function () {
        Meteor.call('logs.clearlog', {
            collection: "logs"
        })
    }
})


Template.app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      NetworkApp.update(this._id, {$set:{
        status: "Accepted"
      }});
      logs.insert({
          "text": Meteor.user().profile.ign + " just accepted " + this.ign + "'s Network application.",
      })
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    NetworkApp.update(this._id, {$set:{
      status: "Rejected"
    }});
    logs.insert({
        "text": Meteor.user().profile.ign + " just rejected " + this.ign + "'s Network application.",
    })
  }
})

Template.cm_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      CMApp.update(this._id, {$set:{
        status: "Accepted"
      }});
      logs.insert({
          "text": Meteor.user().profile.ign + " just accepted " + this.ign + "'s Crafting Magic application.",
      })
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    CMApp.update(this._id, {$set:{
      status: "Rejected"
    }});
    logs.insert({
        "text": Meteor.user().profile.ign + " just rejected " + this.ign + "'s Crafting Magic application.",
    })
  }
})

Template.mr_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      MRApp.update(this._id, {$set:{
        status: "Accepted"
      }});
      logs.insert({
          "text": Meteor.user().profile.ign + " just accepted " + this.ign + "'s Magic Revolution application.",
      })
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    MRApp.update(this._id, {$set:{
      status: "Rejected"
    }});
    logs.insert({
        "text": Meteor.user().profile.ign + " just rejected " + this.ign + "'s Magic Revolution application.",
    })
  }
})

Template.mt_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      MTApp.update(this._id, {$set:{
        status: "Accepted"
      }});
      logs.insert({
          "text": Meteor.user().profile.ign + " just accepted " + this.ign + "'s Medieval Times application.",
      })
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    MTApp.update(this._id, {$set:{
      status: "Rejected"
    }});
    logs.insert({
        "text": Meteor.user().profile.ign + " just rejected " + this.ign + "'s Medieval Times application.",
    })
  }
})

Template.search.events({
  'submit form': function (e, t) {
    var query = $('#search').val();
    NetworkApp.find({ign: query});
    

    return false;
  }
})
