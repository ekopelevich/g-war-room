angular.module('warRoom')
  .controller('ServersController', ServersController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController);

ServersController.$inject = ['$scope', 'ServersService'];

function ServersController($scope, ServersService) {
  console.log("Hello from Servers Controller");

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

DetailController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function DetailController($scope, ServersService, $stateParams, DetailService) {
  console.log("Hello from Detail Controller");
}

SettingsController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function SettingsController($scope, ServersService, $stateParams, DetailService) {
  console.log("Hello from Settings Controller");
}
