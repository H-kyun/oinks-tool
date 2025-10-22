import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchedulesCategoriesService } from './schedules-categories.service';
import { CreateSchedulesCategoryDto } from './dto/create-schedules-category.dto';
import { UpdateSchedulesCategoryDto } from './dto/update-schedules-category.dto';

@Controller('schedules-categories')
export class SchedulesCategoriesController {
  constructor(private readonly schedulesCategoriesService: SchedulesCategoriesService) {}

  @Post()
  create(@Body() createSchedulesCategoryDto: CreateSchedulesCategoryDto) {
    return this.schedulesCategoriesService.create(createSchedulesCategoryDto);
  }

  @Get()
  findAll() {
    return this.schedulesCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schedulesCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchedulesCategoryDto: UpdateSchedulesCategoryDto) {
    return this.schedulesCategoriesService.update(+id, updateSchedulesCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesCategoriesService.remove(+id);
  }
}
