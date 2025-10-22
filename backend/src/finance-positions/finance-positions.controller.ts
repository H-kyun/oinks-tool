import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancePositionsService } from './finance-positions.service';
import { CreateFinancePositionDto } from './dto/create-finance-position.dto';
import { UpdateFinancePositionDto } from './dto/update-finance-position.dto';

@Controller('finance-positions')
export class FinancePositionsController {
  constructor(private readonly financePositionsService: FinancePositionsService) {}

  @Post()
  create(@Body() createFinancePositionDto: CreateFinancePositionDto) {
    return this.financePositionsService.create(createFinancePositionDto);
  }

  @Get()
  findAll() {
    return this.financePositionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financePositionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancePositionDto: UpdateFinancePositionDto) {
    return this.financePositionsService.update(+id, updateFinancePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financePositionsService.remove(+id);
  }
}
