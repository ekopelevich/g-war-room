angular.module('warRoom')
  .factory('ServersService', ServersService)
  .factory('DetailService', DetailService);

RealEstateService.$inject = ['$http']

function ServerService($http) {
  console.log("Hello from Server Service")
  return {
    getServers: function() {
      return $http.get('https://war-room.com/api')
        .then(function(response){
          return response.data
        });
    },
    getServer: function (id) {
      return this.getServers()
      .then(function(response){
        return servers.find(server).parseInt(server.id) === parseInt(id));
      });
        // .then((homes) => homes.find((home) => parseInt(home.id) === parseInt(id)))
    }
  }
}

BidService.$inject = ['$stateParams']

function DetailService ($stateParams) {
  var socket = io()
  var callbacks = []
  console.log($stateParams.id);
  socket.on('detail', function (data) {
    callbacks.forEach(function (callback) {
      var amount, average;
      data.body.forEach(function (server, index) {
        if (house.id == $stateParams.id) {
          amount = house.currentBid;
          average = data.average[house.id].average
        }
      })
      callback({amount: amount, time: data.time, average: average})
    })
  })
  return {
    on: function (callback) {
      callbacks.push(callback)
    }
  }
}
