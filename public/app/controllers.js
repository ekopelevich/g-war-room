angular.module('warRoom')
  .controller('ServersController', ServersController)
  .controller('DetailController', DetailController)
  .controller('DetailController', SettingsController);

ServersController.$inject = ['$scope', 'ServersService'];

function ServersController($scope, SplashService) {
  console.log("Hello from Servers Controller");
  // SplashService.getServers()
  //   .then(function(servers){
  //     $scope.servers = servers;
  //   });
}

DetailController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function DetailController($scope, ServersService, $stateParams, DetailService) {
  console.log("Hello from Detail Controller");
  // RealEstateService.getHome($stateParams.id)
  //   .then((home) => {
  //     $scope.home = home
  //   })
  // $scope.bids = []
  // BidService.on(function (data) {
  //   $scope.bids.push(data)
  //   $scope.average = data.average
  //   console.log($scope.bids)
  //   $scope.$apply()
  // })
}

SettingsController.$inject = ['$scope', 'SettingsService'];

function SeettingsController($scope) {
  console.log("Hello from Settings Controller");
}
