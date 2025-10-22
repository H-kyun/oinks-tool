import { Test, TestingModule } from '@nestjs/testing';
import { SchedulesCategoriesService } from './schedules-categories.service';

describe('SchedulesCategoriesService', () => {
  let service: SchedulesCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulesCategoriesService],
    }).compile();

    service = module.get<SchedulesCategoriesService>(SchedulesCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
