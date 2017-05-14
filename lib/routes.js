// URL Routes
Router.route('/', function () {
  this.render('base');
});

Router.route('/apply/network', function () {
    this.render('NetworkApplication');
    Router.onAfterAction(function () {
        document.title = "Apply for Network"
    })
});

Router.route('/me', function () {
    this.render('me');
    Router.onAfterAction(function () {
      document.title = "Me"
    })
});


Router.route('/me/applications', function () {
    this.render('myapps');
    Router.onAfterAction(function () {
        document.title = "My Applications"
    })
});

Router.route('/register', function () {
    this.render('register');
    Router.onAfterAction(function () {
        document.title = "Register"
    })
});

Router.route('/positions', function () {
    this.render('positions');
    Router.onAfterAction(function () {
        document.title = "Positions"
    })
});

Router.route('/apply/cm/mod', function () {
    this.render('CMModApp');
    Router.onAfterAction(function () {
        document.title = "CM Mod Application"
    })
});
