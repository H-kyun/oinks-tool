import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalendarSchedulesService } from './calendar-schedules.service';
import { CreateCalendarScheduleDto } from './dto/create-calendar-schedule.dto';
import { UpdateCalendarScheduleDto } from './dto/update-calendar-schedule.dto';

@Controller('calendar-schedules')
export class CalendarSchedulesController {
  constructor(private readonly calendarSchedulesService: CalendarSchedulesService) {}

  @Post()
  create(@Body() createCalendarScheduleDto: CreateCalendarScheduleDto) {
    return this.calendarSchedulesService.create(createCalendarScheduleDto);
  }

  @Get()
  findAll() {
    return this.calendarSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalendarScheduleDto: UpdateCalendarScheduleDto) {
    return this.calendarSchedulesService.update(+id, updateCalendarScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarSchedulesService.remove(+id);
  }
}
