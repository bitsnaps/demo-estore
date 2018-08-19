describe("demo.estore.product module", function() {
    var scope;

    beforeEach(angular.mock.module("demo.estore.product", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("ProductController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("ProductController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
