var config = {
  name: 'sozo',
  appname: 'sozo',
  AppName: 'Sozo',
  APPNAME: 'SOZO',
  apptitle: 'Sozo Dashboard',
  appdesc: 'Sozo Dashboard',
  appcolor: '#4285f4',
  apppath: '',
  applogo: 'static/images/logo.png',
  baseurl: '/',
  apiurl: '/',
  version: '1.0.0',
  template: 'index.html',
  port: 1028,
  socket_port: 2810,
  ssocket: {},
  csocket: {},
  livereload: 10101,
  profile: 'dev',
  theme: 'full',
  container: 'application',
  leftMenuAnimationDuration: 1000,
  dateformat: 'd M yy',
  MAX_PAGE: 20,
  social: {
    facebook: 'https://www.facebook.com/',
    twitter: 'http://twitter.com/',
    linkedin: 'https://www.linkedin.com/',
    telegram: 'https://telegram.org/',
  },
  userDisplayName: function(o) {
    return o.displayName || o.fullname || o.name || [o.fname, o.lname].filter(function(o) {return o}).join(' ')
  },
  userVerified: function(o) {
    return o.verified
  },
  userHint: function(o) {
    return `${this.userDisplayName(o)} - ${this.userVerified(o) ? 'Verified' : 'Not verified'}`
  },
  favicon32: 'static/images/favicon32.png',
  favicon192: 'static/images/favicon192.png',
  meta: [
    {name: 'viewport', content:'width=device-width, initial-scale=1.0'},
    {name: 'description', content:'{appdesc}'},
    {name: 'theme-color', content:'{appcolor}'},
    {name: 'msapplication-navbutton-color', content:'{appcolor}'},
    {name: 'apple-mobile-web-app-status-bar-style', content:'{appcolor}'},
  ],
  css: [
    'static/bootstrap/css/bootstrap.min.css',
    'static/material/material-icons.css',
    'static/font-awesome/css/font-awesome.min.css',
    'static/jquery/jquery-ui/jquery-ui.min.css',
    'static/jquery/jquery-ui/jquery-ui.structure.min.css',
    'static/jquery/jquery-ui/jquery-ui.theme.min.css',
    'static/react-table/react-table.css',
  ],
  js: [
    'static/jquery/jquery-ui/external/jquery/jquery.js',
    'static/jquery/jquery-ui/jquery-ui.min.js',
    'static/bootstrap/js/tether.min.js',
    'static/bootstrap/js/bootstrap.min.js',
    'static/d3/d3.v4.min.js',
    'static/d3/d3-selection-multi.v0.4.min.js',
    'static/babel-core/browser.min.js',
    'static/d3pie/d3pie.min.js',
  ],
  facebook: {
    appId: '497063317337038',
  },
  google: {
    apiKey: 'AIzaSyDsOJV9wqYd2fbECyhqNJfeHmNEUgB7-ug',
    clientId: '79031405463-57jk2oa1f90lh6j25j2f81vicdlv5oju.apps.googleusercontent.com',
  },
  emails: {
    support: 'support@szo.io',
  },
  routes: ['dashboard', 'account', 'verification', 'password', 'security', 'buyers', 'prospective', 'about', 'faq'],
  api: {
      menus: 'static/data/menus.json',
      signin: 'static/data/signin.json',
      signup: 'static/data/signup.json',
      signout: 'static/data/signout.json',
      profile: 'static/data/profile.json',
      profile_update: 'static/data/profile_update.json',
      forget_password: 'static/data/forget_password.json',
      change_password: 'static/data/change_password.json',
      countries: 'static/data/countries.json',
      genders: 'static/data/genders.json',
      documentTypes: 'static/data/documentTypes.json',
      securities: 'static/data/securities.json',
      faq: 'static/data/faq.json',
      monthly: 'static/data/monthly.json',
      todayorder: 'static/data/todayorder.json',
      todayvisit: 'static/data/todayvisit.json',
      statistic: 'static/data/statistic.json',
      wallet: 'static/data/wallet.json',
  },
  header: {
    showAppname: false
  },
  addthis: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b23bdafc9ec70b7',
  firebase: {
    apiKey: "AIzaSyCR0Qbipfz5v7l8pjBN-Me7qDyJ0XB3qkE",
    authDomain: "sozo-f0ad8.firebaseapp.com",
    databaseURL: "https://sozo-f0ad8.firebaseio.com",
    projectId: "sozo-f0ad8",
    storageBucket: "sozo-f0ad8.appspot.com",
    messagingSenderId: "969627069166",

    // apiKey: "AIzaSyAh_BFJtVCjMBjYmB3LL5JmjodYWOJGc90",
    // authDomain: "sozo-project.firebaseapp.com",
    // databaseURL: "https://sozo-project.firebaseio.com",
    // projectId: "sozo-project",
    // storageBucket: "sozo-project.appspot.com",
    // messagingSenderId: "288736876698"
  },
}
