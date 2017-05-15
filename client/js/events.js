Template.NetworkApplication.events({
  'submit form': function (e, t) {
    Router.go('/me');
  }
})
Template.app_detail.events({
  'click .accept': function (e, t) {
    console.log("Accept");
      NetworkApp.update(this._id, {
        $set: {status: "Accept"},
      });
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    NetworkApp.update( this._id, {
      $set: {status: "Reject"},
    });
  }
})
