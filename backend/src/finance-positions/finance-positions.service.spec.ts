import { Test, TestingModule } from '@nestjs/testing';
import { FinancePositionsService } from './finance-positions.service';

describe('FinancePositionsService', () => {
  let service: FinancePositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancePositionsService],
    }).compile();

    service = module.get<FinancePositionsService>(FinancePositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
