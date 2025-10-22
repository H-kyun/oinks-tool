import { Test, TestingModule } from '@nestjs/testing';
import { AccountHoldingsService } from './account-holdings.service';

describe('AccountHoldingsService', () => {
  let service: AccountHoldingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountHoldingsService],
    }).compile();

    service = module.get<AccountHoldingsService>(AccountHoldingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
