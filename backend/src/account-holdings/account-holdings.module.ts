import { Module } from '@nestjs/common';
import { AccountHoldingsService } from './account-holdings.service';
import { AccountHoldingsController } from './account-holdings.controller';

@Module({
  controllers: [AccountHoldingsController],
  providers: [AccountHoldingsService],
})
export class AccountHoldingsModule {}
