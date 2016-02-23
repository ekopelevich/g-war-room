angular.module('realEstate')
  .controller('SplashController', SplashController)
  .controller('ServersController', ServersController);
  .controller('DetailController', DetailController);

ServersController.$inject = ['$scope', 'ServersService'];

function HomeController($scope, RealEstateService) {
  console.log("Hello from Home Controller")
  RealEstateService.getHomes()
    .then(function(homes){
      $scope.homes = homes;
    });
}

DetailController.$inject = ['$scope', 'ServersService', '$stateParams', 'DetailService']

function DetailController($scope, RealEstateService, $stateParams, BidService) {
  RealEstateService.getHome($stateParams.id)
    .then((home) => {
      $scope.home = home
    })
  $scope.bids = []
  BidService.on(function (data) {
    $scope.bids.push(data)
    $scope.average = data.average
    console.log($scope.bids)
    $scope.$apply()
  })
}
