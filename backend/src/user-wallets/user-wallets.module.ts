import { Module } from '@nestjs/common';
import { UserWalletsService } from './user-wallets.service';
import { UserWalletsController } from './user-wallets.controller';

@Module({
  controllers: [UserWalletsController],
  providers: [UserWalletsService],
})
export class UserWalletsModule {}
