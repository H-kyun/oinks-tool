import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetCategoriesService } from './budget-categories.service';
import { CreateBudgetCategoryDto } from './dto/create-budget-category.dto';
import { UpdateBudgetCategoryDto } from './dto/update-budget-category.dto';

@Controller('budget-categories')
export class BudgetCategoriesController {
  constructor(private readonly budgetCategoriesService: BudgetCategoriesService) {}

  @Post()
  create(@Body() createBudgetCategoryDto: CreateBudgetCategoryDto) {
    return this.budgetCategoriesService.create(createBudgetCategoryDto);
  }

  @Get()
  findAll() {
    return this.budgetCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetCategoryDto: UpdateBudgetCategoryDto) {
    return this.budgetCategoriesService.update(+id, updateBudgetCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetCategoriesService.remove(+id);
  }
}
