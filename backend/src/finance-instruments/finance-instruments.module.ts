import { Module } from '@nestjs/common';
import { FinanceInstrumentsService } from './finance-instruments.service';
import { FinanceInstrumentsController } from './finance-instruments.controller';

@Module({
  controllers: [FinanceInstrumentsController],
  providers: [FinanceInstrumentsService],
})
export class FinanceInstrumentsModule {}
