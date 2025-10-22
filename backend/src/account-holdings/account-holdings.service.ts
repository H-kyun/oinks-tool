import { Injectable } from '@nestjs/common';
import { CreateAccountHoldingDto } from './dto/create-account-holding.dto';
import { UpdateAccountHoldingDto } from './dto/update-account-holding.dto';

@Injectable()
export class AccountHoldingsService {
  create(createAccountHoldingDto: CreateAccountHoldingDto) {
    return 'This action adds a new accountHolding';
  }

  findAll() {
    return `This action returns all accountHoldings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountHolding`;
  }

  update(id: number, updateAccountHoldingDto: UpdateAccountHoldingDto) {
    return `This action updates a #${id} accountHolding`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountHolding`;
  }
}
