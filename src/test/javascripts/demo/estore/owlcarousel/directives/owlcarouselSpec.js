describe("demo.estore.owlcarousel module", function() {
    var scope;

    beforeEach(angular.mock.module("demo.estore.owlcarousel", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("owlcarousel directive", function() {

        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<div owlcarousel></div>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});