import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetRecordsService } from './budget-records.service';
import { CreateBudgetRecordDto } from './dto/create-budget-record.dto';
import { UpdateBudgetRecordDto } from './dto/update-budget-record.dto';

@Controller('budget-records')
export class BudgetRecordsController {
  constructor(private readonly budgetRecordsService: BudgetRecordsService) {}

  @Post()
  create(@Body() createBudgetRecordDto: CreateBudgetRecordDto) {
    return this.budgetRecordsService.create(createBudgetRecordDto);
  }

  @Get()
  findAll() {
    return this.budgetRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetRecordDto: UpdateBudgetRecordDto) {
    return this.budgetRecordsService.update(+id, updateBudgetRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetRecordsService.remove(+id);
  }
}
