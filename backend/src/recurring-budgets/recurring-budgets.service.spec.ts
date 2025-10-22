import { Test, TestingModule } from '@nestjs/testing';
import { RecurringBudgetsService } from './recurring-budgets.service';

describe('RecurringBudgetsService', () => {
  let service: RecurringBudgetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurringBudgetsService],
    }).compile();

    service = module.get<RecurringBudgetsService>(RecurringBudgetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
