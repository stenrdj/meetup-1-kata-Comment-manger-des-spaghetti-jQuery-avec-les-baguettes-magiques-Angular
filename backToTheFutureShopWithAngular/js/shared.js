var backToTheFutureApp = angular.module('backToTheFutureShop', []);

backToTheFutureApp.controller('sharedController', function($scope) {

  // Main menu
  $scope.menus = menuJson;

  // Side menu
  $scope.sideMenus = sideMenuJson;

});