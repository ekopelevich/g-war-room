angular.module('warRoom', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider){
    console.log("Hello from the War Room")

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('splash', {
      templateUrl: 'components/splash.html',
      controller: 'SplashController',
      url: '/'
    }).state('servers', {
      templateUrl: 'components/servers.html',
      controller: 'ServersController',
      url: '/servers'
    }).state('detail', {
      templateUrl: 'components/detail.html',
      controller: 'DetailController',
      url: '/servers/:id'
    }).state('settings', {
      templateUrl: 'components/settings.html',
      controller: 'SettingsController',
      url: '/settings'
    })
  });
