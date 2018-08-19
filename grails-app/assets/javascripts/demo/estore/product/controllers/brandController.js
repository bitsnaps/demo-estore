//= wrapped

// created manually
angular
    .module("demo.estore.product")
    .controller("BrandController", BrandController);

function BrandController($scope, Product, $stateParams){

    $scope.brand = $stateParams.name;
    $scope.products = [];

    Product.brand({"name": $stateParams.name}, function(products){
        $scope.products = products;
    });



};