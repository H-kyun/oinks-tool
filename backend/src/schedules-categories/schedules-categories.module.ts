import { Module } from '@nestjs/common';
import { SchedulesCategoriesService } from './schedules-categories.service';
import { SchedulesCategoriesController } from './schedules-categories.controller';

@Module({
  controllers: [SchedulesCategoriesController],
  providers: [SchedulesCategoriesService],
})
export class SchedulesCategoriesModule {}
