describe("demo.estore.product module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("demo.estore.product", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Product domain", function() {

        var Product;

        beforeEach(angular.mock.inject(function(_Product_) {
            Product = _Product_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
