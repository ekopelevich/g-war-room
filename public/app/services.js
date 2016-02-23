angular.module('warRoom')
  // .factory('SplashService', SplashService)
  .factory('ServersService', ServersService)
  .factory('DetailService', DetailService);

// SplashService.$inject = ['$http']

// function SplashService() {
//   console.log("Hello from Splash Service")
// }

// ServersService.$inject = ['$http']

function ServersService() {
  console.log("Hello from Servers Service")
}

DetailService.$inject = ['$stateParams']

function DetailService ($stateParams) {
  // var socket = io()
  // var callbacks = []
  // console.log($stateParams.id);
  // socket.on('detail', function (data) {
  //   callbacks.forEach(function (callback) {
  //     var amount, average;
  //     data.body.forEach(function (server, index) {
  //       if (house.id == $stateParams.id) {
  //         amount = house.currentBid;
  //         average = data.average[house.id].average
  //       }
  //     })
  //     callback({amount: amount, time: data.time, average: average})
  //   })
  // })
  // return {
  //   on: function (callback) {
  //     callbacks.push(callback)
  //   }
  // }
}
