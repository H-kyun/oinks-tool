import { Injectable } from '@nestjs/common';
import { CreateFinanceRecordDto } from './dto/create-finance-record.dto';
import { UpdateFinanceRecordDto } from './dto/update-finance-record.dto';

@Injectable()
export class FinanceRecordsService {
  create(createFinanceRecordDto: CreateFinanceRecordDto) {
    return 'This action adds a new financeRecord';
  }

  findAll() {
    return `This action returns all financeRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financeRecord`;
  }

  update(id: number, updateFinanceRecordDto: UpdateFinanceRecordDto) {
    return `This action updates a #${id} financeRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} financeRecord`;
  }
}
