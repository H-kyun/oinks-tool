import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecurringBudgetsService } from './recurring-budgets.service';
import { CreateRecurringBudgetDto } from './dto/create-recurring-budget.dto';
import { UpdateRecurringBudgetDto } from './dto/update-recurring-budget.dto';

@Controller('recurring-budgets')
export class RecurringBudgetsController {
  constructor(private readonly recurringBudgetsService: RecurringBudgetsService) {}

  @Post()
  create(@Body() createRecurringBudgetDto: CreateRecurringBudgetDto) {
    return this.recurringBudgetsService.create(createRecurringBudgetDto);
  }

  @Get()
  findAll() {
    return this.recurringBudgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recurringBudgetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecurringBudgetDto: UpdateRecurringBudgetDto) {
    return this.recurringBudgetsService.update(+id, updateRecurringBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recurringBudgetsService.remove(+id);
  }
}
