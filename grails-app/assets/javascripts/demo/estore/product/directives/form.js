//= wrapped

// created (then modified) from create-ng-directive demo.estore.product.form
angular
    .module("demo.estore.product")
    .directive("productForm", function (dateFilter) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            // dummy variable for demo purposes
            scope.dateUpdated = dateFilter(new Date(), 'H:m:s')
        },
        templateUrl: "/demo/estore/product/product-form.html",
        //transclude: true, // may needed for nested directive
        scope: {
            product: '=',
            save: '&save',
            reset: '&reset'
        }
    };
});
