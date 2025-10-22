import { Test, TestingModule } from '@nestjs/testing';
import { CardStatementsService } from './card-statements.service';

describe('CardStatementsService', () => {
  let service: CardStatementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardStatementsService],
    }).compile();

    service = module.get<CardStatementsService>(CardStatementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
