describe("demo.estore.product module", function() {
    var scope;

    beforeEach(angular.mock.module("demo.estore.product", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("card directive", function() {

        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<div card></div>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});