package demo.estore


import grails.rest.*
import grails.converters.*

class CategoryController {

	static responseFormats = ['json', 'xml']


    def index() {
        //render productService.distinctList('category') as JSON
        render Category.list() as JSON
    }

}
