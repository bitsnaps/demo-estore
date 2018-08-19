//= wrapped

// created with 'create-ng-controller demo.estore.product.product'
angular
    .module("demo.estore.product")
    .controller("ProductController", ProductController);

function ProductController(Product /*, productService*/) {
    var vm = this;
    vm.pName = 'List of products: ';
    vm.errors = null;
    vm.product = null;
    vm.sort = 0;

    // using injected 'Product' domain
    Product.list(function(products){
        vm.products = products;
    });

    /*productService.list().$promise.then(function(products){
        vm.products = products;
    });*/

    vm.edit = function(id){
        Product.get({id: id}, function(p){
            vm.product = p;
        });
        /*productService.get(id).$promise.then(function(p){
            //var index = findById(id);
            //vm.product = angular.copy(  vm.products[index] );
            vm.product = p;
        });*/
    }

    vm.save = function(p, dateUpdated){
        if (p.id){
            p.dateUpdated = dateUpdated;
            Product.update(p, function(p){
                vm.products[ findById(p.id) ] = p;
                vm.reset();
            }, errorHandler);
            /*productService.update(p).$promise.then(function(p){
                var index = findById(p.id);
                vm.products[index] = p;
                vm.reset();
            }, errorHandler);*/
        } else {
            Product.save(p, function(res){
                vm.products.push(res);
                vm.reset();
            }, errorHandler);
            /*productService.save(p).$promise.then(function(p){
                vm.products.push(p);
                vm.reset();
            }, errorHandler);*/
        }
    }

    vm.delete = function(p){
        Product.delete(p, function(res){
            var index = findById(p.id);
            vm.products.splice(index, 1);
        });
        /*productService.delete(p).then(function(res){
            var index = findById(p.id);
            vm.products.splice(index, 1);
        });*/
    }

    vm.reset = function(){
        vm.product = null;
        vm.errors = null;
    }

    var findById = function(id){
        for (var i = 0; i < vm.products.length; i++){
            if (vm.products[i].id === id)
                return i;
        }
        return -1;
    }

    var errorHandler = function(err){
        if (err.status == 422){
           vm.errors = err.data._embedded.errors;
        } else {
           console.log('Error: ', err);
        }
    }

}
