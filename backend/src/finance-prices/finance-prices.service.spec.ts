import { Test, TestingModule } from '@nestjs/testing';
import { FinancePricesService } from './finance-prices.service';

describe('FinancePricesService', () => {
  let service: FinancePricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancePricesService],
    }).compile();

    service = module.get<FinancePricesService>(FinancePricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
