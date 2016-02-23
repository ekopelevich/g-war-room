angular.module('warRoom')
  .factory('ServersService', ServersService)
  .factory('DetailService', DetailService)
  .factory('StatusService', StatusService)
  .factory('SettingsService', SettingsService);

ServersService.$inject = ['$http']

function ServersService($http) {
  console.log("Hello from Servers Service")
  return {
    getServers: function() {
      return $http.get('/api')
      .then(function(response){
        var data = response.data
        var servers = [];
        for (var i = 0; i < data.length; i++) {
          servers.push(data[i]);
        }
        return servers;
      });
    },
    getServer: function (id) {
      return this.getServer()
      .then(function(servers){
        for (var i = 0; i < servers.length; i++) {
          if (i == id) {
            console.log('server', servers[i]);
          }
        }
      });
    }
  }
}

DetailService.$inject = ['$stateParams']

function DetailService ($stateParams) {
  console.log('Hello from Detail Service');
}

StatusService.$inject = ['$stateParams']

function StatusService ($stateParams) {
  var socket = io()
  var callbacks = []
  console.log($stateParams.id);
  socket.on('status', function (data) {
    callbacks.forEach(function (callback) {
      var resTime, average;
      data.body.forEach(function (server, index) {
        if (server.id == $stateParams.id) {
          resTime = server.responseTime;
          average = data.average[server.id].average
        }
      })
      callback({resTime: resTime, time: data.time, average: average})
    })
  })
  return {
    on: function (callback) {
      callbacks.push(callback)
    }
  }
}

SettingsService.$inject = ['$stateParams']

function SettingsService() {
  console.log("Hello from Settings Service")
}
