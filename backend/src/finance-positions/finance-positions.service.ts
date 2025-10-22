import { Injectable } from '@nestjs/common';
import { CreateFinancePositionDto } from './dto/create-finance-position.dto';
import { UpdateFinancePositionDto } from './dto/update-finance-position.dto';

@Injectable()
export class FinancePositionsService {
  create(createFinancePositionDto: CreateFinancePositionDto) {
    return 'This action adds a new financePosition';
  }

  findAll() {
    return `This action returns all financePositions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financePosition`;
  }

  update(id: number, updateFinancePositionDto: UpdateFinancePositionDto) {
    return `This action updates a #${id} financePosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} financePosition`;
  }
}
