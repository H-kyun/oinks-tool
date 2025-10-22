import { Test, TestingModule } from '@nestjs/testing';
import { FinanceRecordsService } from './finance-records.service';

describe('FinanceRecordsService', () => {
  let service: FinanceRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceRecordsService],
    }).compile();

    service = module.get<FinanceRecordsService>(FinanceRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
