backToTheFutureApp.filter('codeFilter', function () {
    return function (products, code) {
        var result = [];
        angular.forEach(products, function (product, key) {
            if(product.code === code) {
                result.push(product);
            }
        });
        return result;
    }
});