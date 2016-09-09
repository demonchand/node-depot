var depotAppContollerModule = angular.module("depotApp.controllers")

depotAppContollerModule.controller("ApplicationController",
  [ "$scope", "$http", "$timeout", function($scope, $http, $timeout) {
  
    $scope.initialize = function() {
      console.log("application controller initialized");
    }

  }]);
