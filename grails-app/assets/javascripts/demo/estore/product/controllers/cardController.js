//= wrapped

// created with 'create-ng-controller demo.estore.product.product'
angular
    .module("demo.estore.product")
    .controller("CardController", CardController);

function CardController($scope, Product, $stateParams){

    $scope.product = null;

    Product.get({"id":$stateParams.id}, function(product){
        $scope.product = product;
    });



};