import { Test, TestingModule } from '@nestjs/testing';
import { FinanceRecordsController } from './finance-records.controller';
import { FinanceRecordsService } from './finance-records.service';

describe('FinanceRecordsController', () => {
  let controller: FinanceRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceRecordsController],
      providers: [FinanceRecordsService],
    }).compile();

    controller = module.get<FinanceRecordsController>(FinanceRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
