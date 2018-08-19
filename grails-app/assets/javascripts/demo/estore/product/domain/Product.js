//= wrapped

// created with 'create-ng-domain demo.estore.product.product'
angular
    .module("demo.estore.product")
    .factory("Product", Product);

function Product($resource) {
    var Product = $resource(
        "product/:id",
        {"id": "@id"},
        {
            "update": {method: "PUT"},
            "list": {method: "GET", isArray: true},
            "all": {method: "GET", isArray: true, url:"stat"},
            "brand": {method: "GET", isArray: true, url:"brand", params:{"name": "@name"}},
            "category": {method: "GET", isArray: true, url:"brand", params:{"category": "@category"}}
            }
    );
    return Product;
}
