angular.module('warRoom')
  .controller('ServersController', ServersController)
  .controller('DetailController', DetailController)
  .controller('SettingsController', SettingsController);

ServersController.$inject = ['$scope', 'ServersService', 'StatusService', '$stateParams'];

function ServersController($scope, ServersService, StatusService, $stateParams) {
  $scope.servers = [];

  ServersService.getServers()
  .then(function(servers){
    $scope.servers = servers;
  });

  console.log(StatusService.getServerStatus());
  $scope.status = StatusService.getServerStatus();
}

SettingsController.$inject = ['$scope', 'ServersService', 'StatusService', '$stateParams']

function DetailController($scope, ServersService, StatusService, $stateParams){
  ServersService.getServer($stateParams.id)
  .then(function(server){
    $scope.server = server
  });
}

SettingsController.$inject = ['$scope', 'SettingsService', '$stateParams']

function SettingsController($scope, ServersService, $stateParams) {
  console.log("Hello from Settings Controller");
}
