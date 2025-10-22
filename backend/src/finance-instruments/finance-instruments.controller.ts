import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanceInstrumentsService } from './finance-instruments.service';
import { CreateFinanceInstrumentDto } from './dto/create-finance-instrument.dto';
import { UpdateFinanceInstrumentDto } from './dto/update-finance-instrument.dto';

@Controller('finance-instruments')
export class FinanceInstrumentsController {
  constructor(private readonly financeInstrumentsService: FinanceInstrumentsService) {}

  @Post()
  create(@Body() createFinanceInstrumentDto: CreateFinanceInstrumentDto) {
    return this.financeInstrumentsService.create(createFinanceInstrumentDto);
  }

  @Get()
  findAll() {
    return this.financeInstrumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financeInstrumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceInstrumentDto: UpdateFinanceInstrumentDto) {
    return this.financeInstrumentsService.update(+id, updateFinanceInstrumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financeInstrumentsService.remove(+id);
  }
}
