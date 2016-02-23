angular.module('warRoom', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider){
    console.log("Hello from Angular")

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('splash', {
      templateUrl: 'partials/splash.html',
      controller: 'SplashController',
      url: '/splash'
    }).state('servers', {
      templateUrl: 'partials/servers.html',
      controller: 'ServersController',
      url: '/servers'
    }).state('detail', {
      templateUrl: 'partials/detail.html',
      controller: 'DetailController',
      url: '/servers/:id'
    })
  });
