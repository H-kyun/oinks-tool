import { Module } from '@nestjs/common';
import { BudgetCategoriesService } from './budget-categories.service';
import { BudgetCategoriesController } from './budget-categories.controller';

@Module({
  controllers: [BudgetCategoriesController],
  providers: [BudgetCategoriesService],
})
export class BudgetCategoriesModule {}
