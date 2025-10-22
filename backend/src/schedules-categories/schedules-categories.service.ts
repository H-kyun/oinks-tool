import { Injectable } from '@nestjs/common';
import { CreateSchedulesCategoryDto } from './dto/create-schedules-category.dto';
import { UpdateSchedulesCategoryDto } from './dto/update-schedules-category.dto';

@Injectable()
export class SchedulesCategoriesService {
  create(createSchedulesCategoryDto: CreateSchedulesCategoryDto) {
    return 'This action adds a new schedulesCategory';
  }

  findAll() {
    return `This action returns all schedulesCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedulesCategory`;
  }

  update(id: number, updateSchedulesCategoryDto: UpdateSchedulesCategoryDto) {
    return `This action updates a #${id} schedulesCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedulesCategory`;
  }
}
