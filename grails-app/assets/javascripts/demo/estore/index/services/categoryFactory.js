//= wrapped

angular
    .module("demo.estore.index")
    .factory("categoryFactory", categoryFactory);

function categoryFactory($http) {
    return {
        get: function() {
            return $http({method: "GET", url: "category"});
        }
    }
}