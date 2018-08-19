describe("demo.estore.product module", function() {

    beforeEach(angular.mock.module("demo.estore.product", function() {
    }));

    describe("productService", function() {

        var productService;

        beforeEach(angular.mock.inject(function(_productService_) {
            productService = _productService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
