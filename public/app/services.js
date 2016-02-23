angular.module('warRoom')
  .factory('ServersService', ServersService)
  .factory('DetailService', DetailService)
  .factory('SettingsService', SettingsService);


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

SettingsService.$inject = ['$stateParams']

function SettingsService() {
  console.log("Hello from Settings Service")
}
