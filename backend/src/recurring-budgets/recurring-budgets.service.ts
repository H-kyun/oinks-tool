import { Injectable } from '@nestjs/common';
import { CreateRecurringBudgetDto } from './dto/create-recurring-budget.dto';
import { UpdateRecurringBudgetDto } from './dto/update-recurring-budget.dto';

@Injectable()
export class RecurringBudgetsService {
  create(createRecurringBudgetDto: CreateRecurringBudgetDto) {
    return 'This action adds a new recurringBudget';
  }

  findAll() {
    return `This action returns all recurringBudgets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recurringBudget`;
  }

  update(id: number, updateRecurringBudgetDto: UpdateRecurringBudgetDto) {
    return `This action updates a #${id} recurringBudget`;
  }

  remove(id: number) {
    return `This action removes a #${id} recurringBudget`;
  }
}
