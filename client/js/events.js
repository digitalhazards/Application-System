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

Template.cm_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      CMApp.update(this._id, {$set:{
        status: "Accepted"
      }});
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    CMApp.update(this._id, {$set:{
      status: "Rejected"
    }});
  }
})

Template.mr_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      MRApp.update(this._id, {$set:{
        status: "Accepted"
      }});
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    MRApp.update(this._id, {$set:{
      status: "Rejected"
    }});
  }
})

Template.mt_app_detail.events({
  'click .accept': function (doc) {
    console.log("Accept");
      MTApp.update(this._id, {$set:{
        status: "Accepted"
      }});
  },
  'click .reject': function (e, t) {
    console.log("Reject");
    MTApp.update(this._id, {$set:{
      status: "Rejected"
    }});
  }
})

Template.search.events({
  'submit form': function (e, t) {
    var query = $('#search').val();
    NetworkApp.find({ign: query});
    

    return false;
  }
})
