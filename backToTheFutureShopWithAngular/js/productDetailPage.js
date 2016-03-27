backToTheFutureApp.controller('productDetailController', function($scope, $location, $filter, cartService) {

  var code = $location.search().code;
  $scope.product = $filter('codeFilter')(products, code)[0];

  $scope.showMessage = false;

  $scope.addToCart = function() {
    $scope.showMessage = cartService.addToCart();
  }

});