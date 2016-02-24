angular.module('warRoom')
  .factory('ServersService', ServersService)
  .factory('StatusService', StatusService)
  .factory('SettingsService', SettingsService);

ServersService.$inject = ['$http']

function ServersService($http) {
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
      return this.getServers()
      .then(function(servers){
        for (var i = 0; i < servers.length; i++) {
          if (parseInt(i) == parseInt(id)) {
            console.log('server', servers[i]);
          }
        }
      });
    }
  }
}

StatusService.$inject = ['$stateParams'];

function StatusService ($stateParams) {
  var socket = io();
  var callbacks = [];
  socket.on('resTime', function(data) {
    var serverData = data.data;
    for (var i = 0; i < serverData.length; i++) {
      resTime = serverData[i].responseTime;
      console.log(resTime);
    };
    callbacks.forEach(function(callback) {
      callback(data);
    });
  });
  return {
    on: function(callback) {
      callbacks.push(callback)
    },
    getServerStatus: function(resTime){
      var warning = 50;
      var critical = 500;
      if(resTime <= warning) {
        status = 'good'
      } else if(resTime > critical) {
        status = 'critical';
      } else {
        status = 'warning';
      } return {
        status: status,
        resTime: resTime
      };
    }
  }
}

SettingsService.$inject = ['$stateParams']

function SettingsService($stateParams) {
  console.log("Hello from Settings Service")
}

function average(resTime){
  var resTime = data.responseTime;
  var total = 0;
  var lastFive = [];
  console.log(resTime);
  if (lastFive.length < 5){
    lastFive.push(resTime);
    for (var i = 0; i < lastFive.length; i++) {
      total += i;
      average = total/5;
    }
  }
  return average;
};
