import { Module } from '@nestjs/common';
import { FinancePositionsService } from './finance-positions.service';
import { FinancePositionsController } from './finance-positions.controller';

@Module({
  controllers: [FinancePositionsController],
  providers: [FinancePositionsService],
})
export class FinancePositionsModule {}
