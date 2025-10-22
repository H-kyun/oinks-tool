import { Test, TestingModule } from '@nestjs/testing';
import { CardStatementsController } from './card-statements.controller';
import { CardStatementsService } from './card-statements.service';

describe('CardStatementsController', () => {
  let controller: CardStatementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardStatementsController],
      providers: [CardStatementsService],
    }).compile();

    controller = module.get<CardStatementsController>(CardStatementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
