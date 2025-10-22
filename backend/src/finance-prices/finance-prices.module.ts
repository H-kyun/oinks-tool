import { Module } from '@nestjs/common';
import { FinancePricesService } from './finance-prices.service';
import { FinancePricesController } from './finance-prices.controller';

@Module({
  controllers: [FinancePricesController],
  providers: [FinancePricesService],
})
export class FinancePricesModule {}
