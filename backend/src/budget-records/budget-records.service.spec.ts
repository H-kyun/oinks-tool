import { Test, TestingModule } from '@nestjs/testing';
import { BudgetRecordsService } from './budget-records.service';

describe('BudgetRecordsService', () => {
  let service: BudgetRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetRecordsService],
    }).compile();

    service = module.get<BudgetRecordsService>(BudgetRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
