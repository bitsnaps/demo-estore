//= wrapped

angular
    .module("demo.estore.index")
    .factory("brandFactory", brandFactory);

function brandFactory($http) {
    return {
        get: function() {
            return $http({method: "GET", url: "brand"});
        }
    }
}