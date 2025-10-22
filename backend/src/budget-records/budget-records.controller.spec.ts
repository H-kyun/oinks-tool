import { Test, TestingModule } from '@nestjs/testing';
import { BudgetRecordsController } from './budget-records.controller';
import { BudgetRecordsService } from './budget-records.service';

describe('BudgetRecordsController', () => {
  let controller: BudgetRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetRecordsController],
      providers: [BudgetRecordsService],
    }).compile();

    controller = module.get<BudgetRecordsController>(BudgetRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
