import { Module } from '@nestjs/common';
import { ListProductController } from './list-product.controller';
import { ListProductService } from './services/list-product.service';
import { GetProductByidService } from './services/get-product-byid.service';

@Module({
  controllers: [ListProductController],
  providers: [ListProductService, GetProductByidService]
})
export class ProductsModule {}
