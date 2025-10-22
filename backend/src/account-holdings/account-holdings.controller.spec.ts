import { Test, TestingModule } from '@nestjs/testing';
import { AccountHoldingsController } from './account-holdings.controller';
import { AccountHoldingsService } from './account-holdings.service';

describe('AccountHoldingsController', () => {
  let controller: AccountHoldingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountHoldingsController],
      providers: [AccountHoldingsService],
    }).compile();

    controller = module.get<AccountHoldingsController>(AccountHoldingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
