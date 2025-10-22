import { Test, TestingModule } from '@nestjs/testing';
import { SchedulesCategoriesController } from './schedules-categories.controller';
import { SchedulesCategoriesService } from './schedules-categories.service';

describe('SchedulesCategoriesController', () => {
  let controller: SchedulesCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedulesCategoriesController],
      providers: [SchedulesCategoriesService],
    }).compile();

    controller = module.get<SchedulesCategoriesController>(SchedulesCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
