angular.module('warRoom')
  .factory('ServersService', ServersService)
  .factory('DetailService', DetailService)
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
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
          servers.push(data[i]);
        }
        console.log(servers);
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

DetailService.$inject = ['$stateParams', 'ServersService']

function DetailService ($stateParams) {
  console.log('Hello from Detail Service');

}

SettingsService.$inject = ['$stateParams']

function SettingsService() {
  console.log("Hello from Settings Service")
}
