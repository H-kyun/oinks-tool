import { Injectable } from '@nestjs/common';
import { CreateBudgetRecordDto } from './dto/create-budget-record.dto';
import { UpdateBudgetRecordDto } from './dto/update-budget-record.dto';

@Injectable()
export class BudgetRecordsService {
  create(createBudgetRecordDto: CreateBudgetRecordDto) {
    return 'This action adds a new budgetRecord';
  }

  findAll() {
    return `This action returns all budgetRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetRecord`;
  }

  update(id: number, updateBudgetRecordDto: UpdateBudgetRecordDto) {
    return `This action updates a #${id} budgetRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetRecord`;
  }
}
