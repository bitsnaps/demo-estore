//= wrapped

// created manually
angular
    .module("demo.estore.product")
    .controller("CategoryController", CategoryController);

function CategoryController($scope, Product, $stateParams){

    $scope.category = $stateParams.category;
    $scope.products = [];

    Product.category({"category": $stateParams.category}, function(products){
        $scope.products = products;
        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
    });

    // demo uib-carousel
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function(product) {
        var product = $scope.products[currIndex];
        slides.push({
          image: product.imageUrl,
          text: [product.name, product.description][slides.length % 4],
          id: currIndex++
        });
    };

    /*/ demo uib-alert

    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };*/

    /*/ demo uib-rating

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];
    */

};