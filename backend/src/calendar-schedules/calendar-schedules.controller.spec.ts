import { Test, TestingModule } from '@nestjs/testing';
import { CalendarSchedulesController } from './calendar-schedules.controller';
import { CalendarSchedulesService } from './calendar-schedules.service';

describe('CalendarSchedulesController', () => {
  let controller: CalendarSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarSchedulesController],
      providers: [CalendarSchedulesService],
    }).compile();

    controller = module.get<CalendarSchedulesController>(CalendarSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
