angular.module('appointmentService', []).service('Apt', ['$http', function($http){
  this.index = function(callback){
    $http.get('/appointments').success(function(appointments){
      callback(appointments)
    })
  }
  this.show = function(aptId,callback){
    $http.get('/appointments/' + aptId).success(function(appointments){
      callback(appointments);
    })
  }
  this.create = function(newApt,callback){
    $http.post('/appointments', newApt).success(function(aptId){
      callback(aptId);
    })
  }
}])
