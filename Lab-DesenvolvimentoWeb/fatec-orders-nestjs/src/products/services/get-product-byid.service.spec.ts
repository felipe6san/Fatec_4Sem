import { Test, TestingModule } from '@nestjs/testing';
import { GetProductByidService } from './get-product-byid.service';

describe('GetProductByidService', () => {
  let service: GetProductByidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProductByidService],
    }).compile();

    service = module.get<GetProductByidService>(GetProductByidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
