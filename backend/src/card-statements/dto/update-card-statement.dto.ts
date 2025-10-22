import { PartialType } from '@nestjs/mapped-types';
import { CreateCardStatementDto } from './create-card-statement.dto';

export class UpdateCardStatementDto extends PartialType(CreateCardStatementDto) {}
