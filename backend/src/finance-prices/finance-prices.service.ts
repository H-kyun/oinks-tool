import { Injectable } from '@nestjs/common';
import { CreateFinancePriceDto } from './dto/create-finance-price.dto';
import { UpdateFinancePriceDto } from './dto/update-finance-price.dto';

@Injectable()
export class FinancePricesService {
  create(createFinancePriceDto: CreateFinancePriceDto) {
    return 'This action adds a new financePrice';
  }

  findAll() {
    return `This action returns all financePrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financePrice`;
  }

  update(id: number, updateFinancePriceDto: UpdateFinancePriceDto) {
    return `This action updates a #${id} financePrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} financePrice`;
  }
}
