import { PartialType } from '@nestjs/mapped-types';
import { CreateFinanceInstrumentDto } from './create-finance-instrument.dto';

export class UpdateFinanceInstrumentDto extends PartialType(CreateFinanceInstrumentDto) {}
