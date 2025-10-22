import { Injectable } from '@nestjs/common';
import { CreateFinanceInstrumentDto } from './dto/create-finance-instrument.dto';
import { UpdateFinanceInstrumentDto } from './dto/update-finance-instrument.dto';

@Injectable()
export class FinanceInstrumentsService {
  create(createFinanceInstrumentDto: CreateFinanceInstrumentDto) {
    return 'This action adds a new financeInstrument';
  }

  findAll() {
    return `This action returns all financeInstruments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financeInstrument`;
  }

  update(id: number, updateFinanceInstrumentDto: UpdateFinanceInstrumentDto) {
    return `This action updates a #${id} financeInstrument`;
  }

  remove(id: number) {
    return `This action removes a #${id} financeInstrument`;
  }
}
