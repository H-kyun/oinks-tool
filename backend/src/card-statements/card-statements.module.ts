import { Module } from '@nestjs/common';
import { CardStatementsService } from './card-statements.service';
import { CardStatementsController } from './card-statements.controller';

@Module({
  controllers: [CardStatementsController],
  providers: [CardStatementsService],
})
export class CardStatementsModule {}
