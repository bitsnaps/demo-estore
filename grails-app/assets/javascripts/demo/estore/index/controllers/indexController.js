//= wrapped

angular
    .module("demo.estore.index")
    .controller("IndexController", IndexController);

function IndexController(applicationDataFactory, brandFactory, categoryFactory, Product, /*productService, */contextPath, $state) {
    var vm = this;

    vm.contextPath = contextPath;

    applicationDataFactory.get().then(function(response) {
        vm.applicationData = response.data;
    });

    vm.stateExists = function(name) {
        return $state.get(name) != null;
    };

    vm.appName = 'Smart eStore';
    vm.brands = [];
    vm.categories = [];

    brandFactory.get().then(function(res){
        if (res.data.length){
            vm.brands = res.data;
        }
    });
    categoryFactory.get().then(function(res){
        if (res.data.length){
            vm.categories = res.data;
        }
    });

    // much easier using a domain
    Product.all(function(p){
        vm.nbrOfProducts = p.length;
    });

    /*productService.all().$promise.then(function(p){
        vm.nbrOfProducts = p.length;
    });*/


}
