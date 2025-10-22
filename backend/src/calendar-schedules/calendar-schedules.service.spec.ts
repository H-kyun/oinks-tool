import { Test, TestingModule } from '@nestjs/testing';
import { CalendarSchedulesService } from './calendar-schedules.service';

describe('CalendarSchedulesService', () => {
  let service: CalendarSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarSchedulesService],
    }).compile();

    service = module.get<CalendarSchedulesService>(CalendarSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
