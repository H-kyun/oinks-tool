import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancePositionDto } from './create-finance-position.dto';

export class UpdateFinancePositionDto extends PartialType(CreateFinancePositionDto) {}
