import { Module } from '@nestjs/common';
import { CalendarSchedulesService } from './calendar-schedules.service';
import { CalendarSchedulesController } from './calendar-schedules.controller';

@Module({
  controllers: [CalendarSchedulesController],
  providers: [CalendarSchedulesService],
})
export class CalendarSchedulesModule {}
