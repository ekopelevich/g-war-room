angular.module('warRoom')
  .controller('ServersController', ServersController)
  .controller('SettingsController', SettingsController);

ServersController.$inject = ['$scope', 'ServersService', 'StatusService', '$stateParams'];

function ServersController($scope, ServersService, StatusService, $stateParams) {
  console.log("Hello from Servers Controller");
  console.log($stateParams);
  $scope.servers = [];

  ServersService.getServers()
  .then(function(servers){
    $scope.servers = servers;
  });

  $scope.getServerStatus = function(resTime){
    var warning = 50;
    var critical = 500;
    if(resTime <= warning) {
      status = 'good'
    } else if(resTime > critical) {
      status = 'critical';
    } else {
      status = 'warning';
    } return status;
  }
}

SettingsController.$inject = ['$scope', 'SettingsService', '$stateParams']

function SettingsController($scope, ServersService, $stateParams) {
  console.log("Hello from Settings Controller");
}
