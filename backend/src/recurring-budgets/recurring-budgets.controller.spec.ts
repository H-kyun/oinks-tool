import { Test, TestingModule } from '@nestjs/testing';
import { RecurringBudgetsController } from './recurring-budgets.controller';
import { RecurringBudgetsService } from './recurring-budgets.service';

describe('RecurringBudgetsController', () => {
  let controller: RecurringBudgetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurringBudgetsController],
      providers: [RecurringBudgetsService],
    }).compile();

    controller = module.get<RecurringBudgetsController>(RecurringBudgetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
