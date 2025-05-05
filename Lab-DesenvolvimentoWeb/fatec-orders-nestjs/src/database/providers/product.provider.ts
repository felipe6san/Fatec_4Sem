import { ProductEntity } from "../entities/product.entity";

export const databaseProviders = [
    {
    provide: "PRODUCT_ENTITY",
    useValue: ProductEntity,
    }
]