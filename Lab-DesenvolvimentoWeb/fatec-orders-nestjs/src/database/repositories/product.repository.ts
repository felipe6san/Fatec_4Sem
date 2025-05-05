import { Injectable } from '@nestjs/common';
import { ProductInterface } from '../../products/product.interface';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductInterface[] = [];
  constructor(
    @Inject('PRODUCT_ENTITY')
    private productEntity: typeof ProductEntity,
  ){}

  create(product: ProductInterface): void {
    this.products.push(product);
  }
  update(id: number, productNew: ProductInterface): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado!');
    Object.assign(product, productNew);
    return product;
  }
  getById(id: number): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado!');
    return product;
  }
  async list(): Promise<ProductEntity[]> {
    const products = this.productEntity.findAll();
    return products;
  }
  delete(id: number): boolean {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1 || productIndex > this.products.length) {
      throw new Error('Produto não encontrado!');
    }
    this.products = this.products.filter((product) => product.id !== id);
    return true;
  }
}
