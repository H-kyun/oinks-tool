import { Injectable } from '@nestjs/common';
import { CreateBudgetCategoryDto } from './dto/create-budget-category.dto';
import { UpdateBudgetCategoryDto } from './dto/update-budget-category.dto';

@Injectable()
export class BudgetCategoriesService {
  create(createBudgetCategoryDto: CreateBudgetCategoryDto) {
    return 'This action adds a new budgetCategory';
  }

  findAll() {
    return `This action returns all budgetCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetCategory`;
  }

  update(id: number, updateBudgetCategoryDto: UpdateBudgetCategoryDto) {
    return `This action updates a #${id} budgetCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetCategory`;
  }
}
