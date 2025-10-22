import { Test, TestingModule } from '@nestjs/testing';
import { FinancePositionsController } from './finance-positions.controller';
import { FinancePositionsService } from './finance-positions.service';

describe('FinancePositionsController', () => {
  let controller: FinancePositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancePositionsController],
      providers: [FinancePositionsService],
    }).compile();

    controller = module.get<FinancePositionsController>(FinancePositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
