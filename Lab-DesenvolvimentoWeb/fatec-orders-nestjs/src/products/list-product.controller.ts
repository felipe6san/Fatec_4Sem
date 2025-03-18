import { Controller, Get, Param } from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByidService } from './services/get-product-byid.service';

@Controller('product')
export class ListProductController {
    constructor(
        private listProductService: ListProductService,
        private getProductByIdService: GetProductByidService,
    ){}

    @Get()
    list(): any[]{
        const productList = this.listProductService.execute();
        return productList;
    }

    @Get(":id")
    getById(@Param('id') id: number):any{
        const product = this.getProductByIdService.execute(id);
        return product;
    }

}
