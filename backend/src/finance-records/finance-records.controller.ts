import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanceRecordsService } from './finance-records.service';
import { CreateFinanceRecordDto } from './dto/create-finance-record.dto';
import { UpdateFinanceRecordDto } from './dto/update-finance-record.dto';

@Controller('finance-records')
export class FinanceRecordsController {
  constructor(private readonly financeRecordsService: FinanceRecordsService) {}

  @Post()
  create(@Body() createFinanceRecordDto: CreateFinanceRecordDto) {
    return this.financeRecordsService.create(createFinanceRecordDto);
  }

  @Get()
  findAll() {
    return this.financeRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financeRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceRecordDto: UpdateFinanceRecordDto) {
    return this.financeRecordsService.update(+id, updateFinanceRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financeRecordsService.remove(+id);
  }
}
