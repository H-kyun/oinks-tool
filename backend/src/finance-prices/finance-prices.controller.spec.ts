import { Test, TestingModule } from '@nestjs/testing';
import { FinancePricesController } from './finance-prices.controller';
import { FinancePricesService } from './finance-prices.service';

describe('FinancePricesController', () => {
  let controller: FinancePricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancePricesController],
      providers: [FinancePricesService],
    }).compile();

    controller = module.get<FinancePricesController>(FinancePricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
