package demo.estore

import grails.rest.*
import grails.converters.*

class BrandController {
	static responseFormats = ['json', 'xml']

    ProductService productService
	
    def index() {
        if (params['name']) {
            respond productService.byBrand(params['name'])
        } else if (params['category']){
            respond productService.byCategory(params['category'])
        } else {
            respond productService.distinctList('brand')
        }
    }

}
