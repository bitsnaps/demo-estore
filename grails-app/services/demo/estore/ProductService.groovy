package demo.estore

import grails.gorm.DetachedCriteria
import grails.gorm.transactions.Transactional

@Transactional
class ProductService {

    def distinctList(prop) {
        new DetachedCriteria(Product).distinct(prop).list()
    }

    def list(){
        Product.list()
    }

    def byBrand(String name){
        Product.where {
            brand == name
        }.findAll()
    }
    def byCategory(String name){
        Product.where {
            category.name == name
        }.findAll()
    }

}
