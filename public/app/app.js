angular.module('warRoom', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider){
    console.log("Hello from Angular")

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('splash', {
      templateUrl: 'components/main/splash.html',
      // controller: 'SplashController',
      url: '/'
    }).state('servers', {
      views: {
        header: {
          templateUrl: 'components/header/header.html',
          controller: 'HeaderController',
          url: '/servers'
        },
        main: {
          templateUrl: 'components/main/servers.html',
          controller: 'ServersController',
          url: '/servers'
        }
      }
    }).state('detail', {
      header: {
        templateUrl: 'components/header/header.html',
        controller: 'HeaderController',
        url: '/servers/:id'
      },
      main: {
        templateUrl: 'components/main/detail.html',
        controller: 'DetailController',
        url: '/servers/:id'
      }
    }).state('settings', {
      header: {
        templateUrl: 'components/header/header.html',
        controller: 'HeaderController',
        url: '/settings'
      },
      main: {
        templateUrl: 'components/main/settings.html',
        controller: 'SettingsController',
        url: '/settings'
      }
    })
  });
