angular.module('warRoom')
  .controller('SplashController', SplashController)
  .controller('ServersController', ServersController)
  .controller('DetailController', DetailController);

SplashController.$inject = ['$scope', 'SplashService'];

function SplashController($scope, SplashService) {
  console.log("Hello from Splash Controller");
  // SplashService.getHomes()
  //   .then(function(homes){
  //     $scope.homes = homes;
  //   });
}

ServersController.$inject = ['$scope', 'ServersService'];

function ServersController($scope, SplashService) {
  console.log("Hello from Servers Controller");
  // SplashService.getHomes()
  //   .then(function(homes){
  //     $scope.homes = homes;
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
