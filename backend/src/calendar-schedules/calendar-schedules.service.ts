import { Injectable } from '@nestjs/common';
import { CreateCalendarScheduleDto } from './dto/create-calendar-schedule.dto';
import { UpdateCalendarScheduleDto } from './dto/update-calendar-schedule.dto';

@Injectable()
export class CalendarSchedulesService {
  create(createCalendarScheduleDto: CreateCalendarScheduleDto) {
    return 'This action adds a new calendarSchedule';
  }

  findAll() {
    return `This action returns all calendarSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendarSchedule`;
  }

  update(id: number, updateCalendarScheduleDto: UpdateCalendarScheduleDto) {
    return `This action updates a #${id} calendarSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendarSchedule`;
  }
}
