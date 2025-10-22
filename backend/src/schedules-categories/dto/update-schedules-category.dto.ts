import { PartialType } from '@nestjs/mapped-types';
import { CreateSchedulesCategoryDto } from './create-schedules-category.dto';

export class UpdateSchedulesCategoryDto extends PartialType(CreateSchedulesCategoryDto) {}
