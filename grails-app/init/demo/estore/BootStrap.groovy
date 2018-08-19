package demo.estore

import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        Category smartphones = new Category(name: 'Smartphones', cashback: 3).save(flush: true)
        Category laptop = new Category(name: 'Laptop', cashback: 2).save(flush: true)

        if (Product.count() == 0) {
            def text = this.class.classLoader.getResourceAsStream('resources/products.json').getText()
            def products = JSON.parse(text)
            for (p in products) {
                new Product(
                        name: p['name'],
                        description: p['description'],
                        quantity: p['quantity'],
                        imageUrl: p['imageUrl'],
                        discountRate: p['discountRate'],
                        store: p['store'],
                        brand: p['brand'],
                        category: Category.findByName(p['category']),
                        freeShipping: p['freeShipping'],
                        price: p['price']).save(failOnError: true)
            }

        }

        println("We have ${Product.count()} product(s).")

    }
    def destroy = {
    }
}
