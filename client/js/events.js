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

Template.app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      NetworkApp.update(this._id, {$set:{
        status: "Accepted"
      }});
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    NetworkApp.update(this._id, {$set:{
      status: "Rejected"
    }});
  }
})
