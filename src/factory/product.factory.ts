import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Product } from "../entitys/ProductEntity"

export const productsFactory = setSeederFactory(Product, (faker: Faker) => {
    const product = new Product();
    product.name = faker.commerce.productName();
    product.category = faker.commerce.department();
    product.description = faker.commerce.productDescription();
    product.price = parseFloat(faker.commerce.price(100000,1000000));
    product.manufacturer = faker.commerce.productMaterial();
    product.quantity = parseInt(faker.commerce.price(0,1000));
    return product;
});