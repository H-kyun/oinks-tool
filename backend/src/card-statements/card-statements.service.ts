import { Injectable } from '@nestjs/common';
import { CreateCardStatementDto } from './dto/create-card-statement.dto';
import { UpdateCardStatementDto } from './dto/update-card-statement.dto';

@Injectable()
export class CardStatementsService {
  create(createCardStatementDto: CreateCardStatementDto) {
    return 'This action adds a new cardStatement';
  }

  findAll() {
    return `This action returns all cardStatements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardStatement`;
  }

  update(id: number, updateCardStatementDto: UpdateCardStatementDto) {
    return `This action updates a #${id} cardStatement`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardStatement`;
  }
}
