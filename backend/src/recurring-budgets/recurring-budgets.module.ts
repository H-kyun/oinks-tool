import { Module } from '@nestjs/common';
import { RecurringBudgetsService } from './recurring-budgets.service';
import { RecurringBudgetsController } from './recurring-budgets.controller';

@Module({
  controllers: [RecurringBudgetsController],
  providers: [RecurringBudgetsService],
})
export class RecurringBudgetsModule {}
