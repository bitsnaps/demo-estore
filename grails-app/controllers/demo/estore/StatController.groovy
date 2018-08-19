package demo.estore


import grails.rest.*
import grails.converters.*

class StatController {
	static responseFormats = ['json', 'xml']

    def productService

    def index() {
        render productService.list() as JSON
    }
}
