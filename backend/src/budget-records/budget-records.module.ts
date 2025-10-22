import { Module } from '@nestjs/common';
import { BudgetRecordsService } from './budget-records.service';
import { BudgetRecordsController } from './budget-records.controller';

@Module({
  controllers: [BudgetRecordsController],
  providers: [BudgetRecordsService],
})
export class BudgetRecordsModule {}
