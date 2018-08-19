//= wrapped
//= require /angular/angular
//= require /demo/estore/core/demo.estore.core
//= require /demo/estore/index/demo.estore.index
//= require /demo/estore/product/demo.estore.product
//= require /demo/estore/owlcarousel/demo.estore.owlcarousel


angular.module("demo.estore", [
        "demo.estore.core",
        "demo.estore.index",
        "demo.estore.product", // must include 'product' module here and above in the require section
        "demo.estore.owlcarousel"
    ]);
