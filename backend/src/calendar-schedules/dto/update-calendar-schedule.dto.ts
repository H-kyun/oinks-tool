import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarScheduleDto } from './create-calendar-schedule.dto';

export class UpdateCalendarScheduleDto extends PartialType(CreateCalendarScheduleDto) {}
