"use strict"

var depotAppControllersModule = angular.module("depotApp.controllers", []);

depotAppControllersModule.config([ "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
  }]);
