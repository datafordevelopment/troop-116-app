var app = angular.module("starter", ["ionic", "starter.controllers"]);

app.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
  if(window.cordova && window.cordova.plugins.Keyboard) {
   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
   cordova.plugins.Keyboard.disableScroll(true);
  }
  if(window.StatusBar) {
   StatusBar.styleDefault();
  }
 });
});

app.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider.state("app", {
  url: "/app",
  abstract: true,
  templateUrl: "templates/menu.html",
  controller: "AppCtrl"
  });
 $stateProvider.state("app.home", {
  url: "/home",
  views: {
   "menuContent": {
     templateUrl: "templates/home.html"
   }
  }
 });
 $urlRouterProvider.otherwise("/app/home");
});
