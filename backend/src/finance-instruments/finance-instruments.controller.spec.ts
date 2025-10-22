import { Test, TestingModule } from '@nestjs/testing';
import { FinanceInstrumentsController } from './finance-instruments.controller';
import { FinanceInstrumentsService } from './finance-instruments.service';

describe('FinanceInstrumentsController', () => {
  let controller: FinanceInstrumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceInstrumentsController],
      providers: [FinanceInstrumentsService],
    }).compile();

    controller = module.get<FinanceInstrumentsController>(FinanceInstrumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
