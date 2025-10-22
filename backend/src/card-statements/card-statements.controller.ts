import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardStatementsService } from './card-statements.service';
import { CreateCardStatementDto } from './dto/create-card-statement.dto';
import { UpdateCardStatementDto } from './dto/update-card-statement.dto';

@Controller('card-statements')
export class CardStatementsController {
  constructor(private readonly cardStatementsService: CardStatementsService) {}

  @Post()
  create(@Body() createCardStatementDto: CreateCardStatementDto) {
    return this.cardStatementsService.create(createCardStatementDto);
  }

  @Get()
  findAll() {
    return this.cardStatementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardStatementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardStatementDto: UpdateCardStatementDto) {
    return this.cardStatementsService.update(+id, updateCardStatementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardStatementsService.remove(+id);
  }
}
