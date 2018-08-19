describe("demo.estore.owlcarousel module", function() {
    var scope;

    beforeEach(angular.mock.module("demo.estore.owlcarousel", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("CarouselController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("CarouselController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
