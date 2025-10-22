import { Test, TestingModule } from '@nestjs/testing';
import { FinanceInstrumentsService } from './finance-instruments.service';

describe('FinanceInstrumentsService', () => {
  let service: FinanceInstrumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceInstrumentsService],
    }).compile();

    service = module.get<FinanceInstrumentsService>(FinanceInstrumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
