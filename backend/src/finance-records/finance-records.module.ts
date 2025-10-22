import { Module } from '@nestjs/common';
import { FinanceRecordsService } from './finance-records.service';
import { FinanceRecordsController } from './finance-records.controller';

@Module({
  controllers: [FinanceRecordsController],
  providers: [FinanceRecordsService],
})
export class FinanceRecordsModule {}
