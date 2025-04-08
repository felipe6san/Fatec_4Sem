import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../database/repositories/product.repository';
import { ProductInterface } from '../product.interface';

@Injectable()
export class GetProductByIdService {
  constructor(private productRepository: ProductRepository) {}
  execute(id: number): ProductInterface {
    return this.productRepository.getById(id);
  }
}
