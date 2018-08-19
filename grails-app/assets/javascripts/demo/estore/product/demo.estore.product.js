//= wrapped
//= require /angular/angular
//= require /demo/estore/core/demo.estore.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

// using create-ng-module will inject 'demo.estore.core' module, then we add "ui.bootstrap"
angular.module("demo.estore.product", [
    "demo.estore.core",
    "ui.bootstrap" // for angular-ui-bootstrap (https://angular-ui.github.io/bootstrap/)
]);

