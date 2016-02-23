angular.module('warRoom')
  .controller('ServersController', ServersController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController);

ServersController.$inject = ['$scope', 'ServersService'];

function ServersController($scope, ServersService) {
  console.log("Hello from Servers Controller");
  // $scope.servers = [
  //   {
  //     "name": "WOPR",
  //     "responseTime": 0.1,
  //     "id": 1776,
  //     "os": "Red Hat",
  //     "memory": "8GB",
  //     "cpu": "Intel i7",
  //     "temp": "82C"
  //   },
  //   {
  //     "name": "HAL",
  //     "responseTime": 1.01,
  //     "id": 2010,
  //     "os": "Dave OS",
  //     "memory": "128KB",
  //     "cpu": "Comodore 64",
  //     "temp": "10C"
  //   },
  //   {
  //     "name": "R2D2",
  //     "responseTime": 1.3191565923795197,
  //     "id": 1977,
  //     "os": "Mission Control OS",
  //     "memory": "2EB",
  //     "cpu": "Force t5",
  //     "temp": "84C"
  //   }
  // ];

  $scope.servers = [];

  ServersService.getServers()
    .then(function(servers){
      $scope.servers = servers;
      console.log('here' + $scope.servers);
    });
}

DetailController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function DetailController($scope, ServersService, $stateParams, DetailService) {
  console.log("Hello from Detail Controller");
}

SettingsController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function SettingsController($scope, ServersService, $stateParams, DetailService) {
  console.log("Hello from Settings Controller");
}
