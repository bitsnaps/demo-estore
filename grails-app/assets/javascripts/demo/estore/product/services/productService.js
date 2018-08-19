//= wrapped

// created with 'create-ng-service demo.estore.product.product'
angular
    .module("demo.estore.product")
    .factory("productService", productService);

function productService(Product) {
    //function() {
    return {
        list: function (){
            return Product.list();
        },
        get: function(id){
            return Product.get({id: id});
        },
        save: function(p){
            return Product.save(p);
        },
        update: function(p){
            return Product.update(p);
        },
        delete: function(p){
            return p.$delete();
        },
        all: function(){
            return Product.all();
        }
     }
    //};
}