package demo.estore

class Category {

    String name
    int cashback

    static constraints = {
        name(nullable: false)
        cashback(nullable: false)
    }
}
