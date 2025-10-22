import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancePricesService } from './finance-prices.service';
import { CreateFinancePriceDto } from './dto/create-finance-price.dto';
import { UpdateFinancePriceDto } from './dto/update-finance-price.dto';

@Controller('finance-prices')
export class FinancePricesController {
  constructor(private readonly financePricesService: FinancePricesService) {}

  @Post()
  create(@Body() createFinancePriceDto: CreateFinancePriceDto) {
    return this.financePricesService.create(createFinancePriceDto);
  }

  @Get()
  findAll() {
    return this.financePricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financePricesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancePriceDto: UpdateFinancePriceDto) {
    return this.financePricesService.update(+id, updateFinancePriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financePricesService.remove(+id);
  }
}
