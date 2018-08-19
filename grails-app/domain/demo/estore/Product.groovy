package demo.estore

import grails.rest.Resource

@Resource(uri='/products')
class Product {

    Product(){
        this.uuid = UUID.randomUUID().toString()
    }

    String uuid

    String name
    String description
    String store
    String brand // added
    Category category // added
    int discountRate

    int quantity
    BigDecimal price

    String imageUrl
    String detailsImageUrl

    Date dateCreated
    Date lastUpdated

    boolean disabled

    Double length
    Double width
    Double height
    Double weight

    String productNo

    static constraints = {
        uuid(nullable:true)
        name(nullable:false)
        description(nullable:true,size:0..65535)
        brand(nullable: false)
        store(nullable: true)
        category(nullable: false)
        discountRate(nullable: true)
        quantity(nullable: true)
        price(nullable:false)
        imageUrl(nullable:true)
        disabled(nullable:true)
        detailsImageUrl(nullable:true)
        length(nullable:true)
        width(nullable:true)
        height(nullable:true)
        weight(nullable:true)
        productNo(nullable:true)
    }


}

