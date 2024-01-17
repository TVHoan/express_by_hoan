import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Product } from "../entitys/ProductEntity"
import {Category} from "../entitys/CategoryEntity";

export const productsFactory = setSeederFactory(Product,   (faker: Faker) => {
    const product = new Product();
    product.name = faker.commerce.productName();
    product.description = faker.commerce.productDescription();
    product.price = parseFloat(faker.commerce.price(100,10000));
    product.manufacturer = faker.commerce.productMaterial();
    product.quantity = parseInt(faker.commerce.price(0,1000));
    product.image = faker.image.imageUrl();
    var category = new Category();
    category.id = 1;
    category.name = "Ecomerce";
    return product;
});
