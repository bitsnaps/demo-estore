//= wrapped
//= require /angular/angular
//= require /angular/ui-bootstrap-tpls
//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module("demo.estore.index", [
    "demo.estore.core",
    "ui.bootstrap.dropdown",
    "ui.bootstrap.collapse",
    "ui.router",
    "demo.estore.product"
])
.config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "/demo/estore/index/index.html"
        })
        .state('listing', {
            url: "/listing",
            templateUrl: "/demo/estore/product/listing.html",
            //controller: 'ProductController' // <-- defined explicitly in templates
        })
        .state('brands', {
            url: "/brands/:name",
            templateUrl: "/demo/estore/product/brand.html",
            controller: 'BrandController'
        })
        .state('categories', {
            url: "/categories/:category",
            templateUrl: "/demo/estore/product/category.html",
            controller: 'CategoryController'
        })
        .state('card', {
            url: "/card/:id",
            templateUrl: "/demo/estore/product/card.html",
            controller: 'CardController'
        });

    $urlRouterProvider.otherwise('/');
}
