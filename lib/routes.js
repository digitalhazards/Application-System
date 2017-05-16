Router.configure({
    layoutTemplate: 'base'
});

// URL Routes
Router.route('/', function() {
  this.render('home');
  Router.onAfterAction(function() {
    document.title = "DH Applications"
  })
});

Router.route('/apply/network', function() {
  this.render('NetworkApplication');
  Router.onAfterAction(function() {
    document.title = "Apply for Network"
  })
});

Router.route('/me', function() {
  this.render('me');
  Router.onAfterAction(function() {
    document.title = "Me"
  })
});


Router.route('/me/applications', function() {
  this.render('myapps');
  Router.onAfterAction(function() {
    document.title = "My Applications"
  })
});

Router.route('/register', function() {
  this.render('register');
  Router.onAfterAction(function() {
    document.title = "Register"
  })
});

Router.route('/positions', function() {
  this.render('positions');
  Router.onAfterAction(function() {
    document.title = "Positions"
  })
});

Router.route('/apply/cm', function() {
  this.render('CMModApp');
  Router.onAfterAction(function() {
    document.title = "CM Application"
  })
});

Router.route('/apply/mt', function() {
  this.render('MTApp');
  Router.onAfterAction(function() {
    document.title = "MT Application"
  })
});

Router.route('/apply/mr', function() {
  this.render('MRApp');
  Router.onAfterAction(function() {
    document.title = "MR Application"
  })
});

Router.route('/admin', function() {
  this.render('admin');
  Router.onAfterAction(function() {
    document.title = "Apps - Admin"
  })
});

Router.route('/app/network/:_id', function () {
  this.render('app_detail', {
    data: function () {
      return NetworkApp.findOne({_id: this.params._id});
    }
  });
  Router.onAfterAction(function() {
    document.title = "Network Application"
  })
});

Router.route('/app/cm/:_id', function () {
  this.render('cm_app_detail', {
    data: function () {
      return CMApp.findOne({_id: this.params._id});
    }
  });
  Router.onAfterAction(function() {
    document.title = "CM Application"
  })
});

Router.route('/app/mt/:_id', function () {
  this.render('mt_app_detail', {
    data: function () {
      return MTApp.findOne({_id: this.params._id});
    }
  });
  Router.onAfterAction(function() {
    document.title = "MT Application"
  })
});

Router.route('/app/mr/:_id', function () {
  this.render('mr_app_detail', {
    data: function () {
      return MRApp.findOne({_id: this.params._id});
    }
  });
  Router.onAfterAction(function() {
    document.title = "MR Application"
  })
});
